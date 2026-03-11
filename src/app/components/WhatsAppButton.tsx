import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "441234567890"; // Replace with actual WhatsApp number
  const message = "Hello! I'd like to book an appointment at Orestes Dental Rugby.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
      
      {/* Tooltip */}
      <div className="absolute left-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900" />
      </div>
    </motion.button>
  );
}
