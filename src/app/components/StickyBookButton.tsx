import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar } from "lucide-react";

export function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("appointment-booking")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToBooking}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 flex items-center gap-3 group"
        >
          <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold hidden sm:inline">Book Appointment</span>
          
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
