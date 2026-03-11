import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    setIsMobileMenuOpen(false);
    document.getElementById("appointment-booking")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl`}
      >
        <div className={`mx-auto px-6 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between shadow-sm border border-white/40 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-white/60 backdrop-blur-sm"
        }`}>
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">Orestes Dental</span>
          </motion.a>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-10 bg-white/40 px-6 py-2 rounded-full border border-gray-100/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section - Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="sm"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-[#7c9aff] to-[#8699ff] hover:from-[#6b8bff] hover:to-[#758bff] text-white shadow-lg shadow-blue-200/50 rounded-xl px-8 h-10 font-bold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full w-full"
                    asChild
                  >
                    <a href="tel:+441234567890" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                  
                  <Button
                    onClick={scrollToBooking}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 rounded-full w-full"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
