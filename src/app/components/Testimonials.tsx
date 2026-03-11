import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Payne",
    image: "/images/reviewer-samantha.png",
    rating: 5,
    text: "I've seen a lot of Dentists over my lifetime because I've had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.",
  },
  {
    name: "Michael Chen",
    image: "/images/reviewer-michael.png",
    rating: 5,
    text: "Professional, caring, and incredibly skilled. My dental implants look and feel completely natural. The extraction process was much easier than I anticipated, and the follow-up care was exceptional. I finally have my smile back!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#f6c200] text-[#f6c200]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-24 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Left Side: Image Card with Yellow Background */}
          <div className="relative flex-shrink-0 w-full max-w-[400px]">
            {/* Yellow Decorative Rectangle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[120%] bg-[#fbd400] rounded-[20px] -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[15px] p-6 shadow-2xl"
              >
                <div className="relative aspect-square rounded-[10px] overflow-hidden mb-6">
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{current.name}</h4>
                  <StarRating rating={current.rating} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 text-white">
            <div className="w-full h-[1px] bg-white/30 mb-10 hidden lg:block" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              What our client says about us
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Large Quote Icon */}
                <div className="relative">
                  <svg 
                    width="48" 
                    height="36" 
                    viewBox="0 0 48 36" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/40"
                  >
                    <path d="M13.3333 0C5.96914 0 0 5.8625 0 13.0875V36H18.6667V13.0875H9.33333C9.33333 8.325 10.6667 6.525 13.3333 6.525V0ZM40 0C32.6358 0 26.6667 5.8625 26.6667 13.0875V36H45.3333V13.0875H36C36 8.325 37.3333 6.525 40 6.525V0Z" fill="currentColor"/>
                  </svg>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-blue-50/90 font-light">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] aspect-square rounded-full bg-blue-400/10 blur-3xl" />
    </section>
  );
}
