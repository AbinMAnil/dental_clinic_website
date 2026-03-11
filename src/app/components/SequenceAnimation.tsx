import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useSpring } from "motion/react";

interface SequenceAnimationProps {
  frameCount: number;
  baseUrl: string;
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
  scrollThreshold?: [number, number]; // [start, end] as percentage 0-1
  fillMode?: "contain" | "cover";
}

export function SequenceAnimation({ 
  frameCount, 
  baseUrl, 
  className, 
  targetRef,
  scrollThreshold = [0, 1],
  fillMode = "contain"
}: SequenceAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for a heavier feel
  // Initializing with the current value prevents the "jump" on first scroll
  const smoothProgress = useSpring(scrollYProgress.get(), {
    stiffness: 25, 
    damping: 35,
    restDelta: 0.001
  });

  // Sync the spring with scroll progress manually to ensure no initial jump
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      smoothProgress.set(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress, smoothProgress]);

  const frameIndex = useTransform(smoothProgress, scrollThreshold, [0, frameCount - 1], {
    clamp: true
  });

  // Preload and Decode images for buttery smooth mobile performance
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preload = async () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `${baseUrl}/ezgif-frame-${frameNumber}.png`;
        
        try {
          // Pre-decoding prevents the "flicker" on first draw
          await img.decode();
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoaded(true);
          }
        } catch (err) {
          console.warn(`Frame ${i} failed to decode:`, err);
          // Fallback if decode fails
          img.onload = () => {
             loadedCount++;
             if (loadedCount === frameCount) setIsLoaded(true);
          };
        }
        loadedImages.push(img);
      }
    };

    preload();
    setImages(loadedImages);
  }, [frameCount, baseUrl]);

  // High Performance Render Loop
  const renderRef = useRef<number | null>(null);
  
  const drawFrame = (index: number) => {
    if (renderRef.current) cancelAnimationFrame(renderRef.current);
    
    renderRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0 || !images[index]) return;

      const context = canvas.getContext("2d", { alpha: true });
      if (!context) return;

      const image = images[index];

      // Explicit high-quality smoothing
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      context.clearRect(0, 0, canvas.width, canvas.height);

      const iw = image.width;
      const ih = image.height;
      const cw = canvas.width;
      const ch = canvas.height;
      
      const ratio = fillMode === "contain" 
        ? Math.min(cw / iw, ch / ih)
        : Math.max(cw / iw, ch / ih);
        
      const nw = iw * ratio;
      const nh = ih * ratio;
      const nx = (cw - nw) / 2;
      const ny = (ch - nh) / 2;

      context.drawImage(image, nx, ny, nw, nh);
    });
  };

  // Sync animation
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      drawFrame(index);
    });
    return () => {
       unsubscribe();
       if (renderRef.current) cancelAnimationFrame(renderRef.current);
    };
  }, [frameIndex, images]);

  // Draw initial frame
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      drawFrame(0);
    }
  }, [isLoaded, images]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap shadow/size for performance on extreme retina
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      drawFrame(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (canvasRef.current?.parentElement) {
      resizeObserver.observe(canvasRef.current.parentElement);
    }

    handleResize(); 
    
    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [isLoaded, images]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
    </div>
  );
}
