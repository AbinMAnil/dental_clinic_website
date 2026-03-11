import { motion } from "motion/react";
import { Stethoscope, Sparkles, Smile, Drill, AlertCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive dental care including check-ups, cleanings, and preventive treatments.",
    gradient: "from-blue-400 via-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and aesthetic dental solutions.",
    gradient: "from-purple-400 via-purple-500 to-purple-600",
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
    gradient: "from-cyan-400 via-cyan-500 to-cyan-600",
  },
  {
    icon: Drill,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth with natural-looking implants.",
    gradient: "from-teal-400 via-teal-500 to-teal-600",
  },
  {
    icon: AlertCircle,
    title: "Emergency Dental Care",
    description: "Same-day appointments for urgent dental issues and pain relief.",
    gradient: "from-red-400 via-red-500 to-red-600",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Braces and aligners to straighten teeth and improve your bite.",
    gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine check-ups to advanced procedures, we offer comprehensive dental care tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* 3D Icon */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* 3D depth shadow */}
                    <div className={`absolute top-2 left-2 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-md -z-10 group-hover:opacity-30 transition-opacity duration-300`} />
                  </motion.div>

                  <h3 className="mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
