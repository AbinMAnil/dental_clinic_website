import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzY2Mzk0NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern dental clinic reception",
    category: "Facility",
  },
  {
    url: "https://images.unsplash.com/photo-1758653500342-5476c8ec3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNhcmV8ZW58MXx8fHwxNzY2NDA0Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dentist providing patient care",
    category: "Treatment",
  },
  {
    url: "https://images.unsplash.com/photo-1591283261401-c76eba2d369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2NDM4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Advanced dental equipment",
    category: "Technology",
  },
  {
    url: "https://images.unsplash.com/photo-1647125288686-4ba242f98bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNtaWxlJTIwdGVldGh8ZW58MXx8fHwxNzY2NDkzODYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Happy patient with bright smile",
    category: "Results",
  },
  {
    url: "https://images.unsplash.com/photo-1720180246349-584d40758674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY0ODY5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern clinic interior",
    category: "Facility",
  },
  {
    url: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2UlMjB3YWl0aW5nfGVufDF8fHx8MTc2NjQ5Mzg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Comfortable waiting area",
    category: "Facility",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Our Clinic Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our modern, comfortable dental practice and see the care we provide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image with 3D frame effect */}
              <div className="relative h-full w-full bg-gradient-to-br from-blue-100 to-cyan-100 p-2">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <ZoomIn className="w-12 h-12 text-white mb-3" />
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
                <span className="text-sm font-medium text-gray-700">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors duration-200 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg">{galleryImages[selectedImage].alt}</p>
                <p className="text-white/60 text-sm mt-1">{galleryImages[selectedImage].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
