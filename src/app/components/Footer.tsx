import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Book Appointment", href: "#appointment-booking" },
];

const services = [
  { name: "General Dentistry", href: "#services" },
  { name: "Cosmetic Dentistry", href: "#services" },
  { name: "Teeth Whitening", href: "#services" },
  { name: "Dental Implants", href: "#services" },
  { name: "Emergency Care", href: "#services" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white mb-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              Orestes Dental
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted dental care provider in Rugby. We're committed to delivering exceptional dental services with a gentle, patient-focused approach.
            </p>
            <div className="space-y-2">
              <a href="tel:+441234567890" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+44 1234 567890</span>
              </a>
              <a href="mailto:info@orestesdental.co.uk" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@orestesdental.co.uk</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 High Street, Rugby, CV21 3AB</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white mb-6">Opening Hours</h4>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-gray-300">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Saturday</span>
                <span className="text-gray-300">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>

            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-400 flex items-center justify-center transition-all duration-300 border border-white/20"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Orestes Dental Rugby Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
