import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById("appointment-booking")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-white">
      {/* Refined decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial blue gradient in top right */}
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] bg-gradient-radial from-blue-100/60 to-transparent rounded-full blur-[120px]" />
        
        {/* Soft cyan gradient in bottom left */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-gradient-radial from-cyan-50/50 to-transparent rounded-full blur-[100px]" />

        {/* Floating Rings like in reference */}
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] border border-blue-200/20 rounded-full" />
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] border border-blue-100/30 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Exceptional Dental <br className="hidden md:block" />
              <span className="text-gray-900">Care For All Ages</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Book a visit with our experienced dentists for healthier, bright smile
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-[#7c9aff] to-[#a4b5ff] hover:from-[#6b8bff] hover:to-[#93a6ff] text-white shadow-lg shadow-blue-200/50 transition-all duration-300 rounded-xl px-6 py-4 md:px-10 md:py-7 h-auto text-base md:text-lg font-semibold"
              >
                Book appointment
              </Button>
              
              <button 
                className="flex items-center gap-2 text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors group"
                onClick={scrollToBooking}
              >
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Levitating Tooth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[500px]"
            >
              <img 
                src="/images/shiny-tooth.png" 
                alt="3D Shiny Tooth" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
              />
              
              {/* Radial glow behind tooth */}
              <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-[80px] -z-10 scale-75" />
            </motion.div>

            {/* Floating accent circles from reference */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-10 left-0 w-24 h-24 bg-cyan-200/20 rounded-full blur-xl animate-pulse delay-700" />

            {/* Floating Appointment Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-0 right-0 md:right-10 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-50/50 max-w-[240px] z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Book an appointment</p>
                </div>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-3">
                <p className="text-[11px] text-gray-600 font-medium">Hi there! Can I help you book an appointment?</p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
