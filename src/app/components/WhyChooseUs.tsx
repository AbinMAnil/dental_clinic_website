import { motion } from "motion/react";
import { Shield, Users, Building2, Clock, Check } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Happy Patients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
];

const benefits = [
  "Pain-free treatments with modern anesthesia",
  "Flexible appointment slots including evenings",
  "Affordable pricing and payment plans",
  "Latest dental technology and techniques",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Why Choose Orestes Dental?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing exceptional dental care that puts your comfort and health first.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
              </div>
              <p className="text-gray-700 pt-0.5">{benefit}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Shield, text: "GDC Registered" },
            { icon: Users, text: "Patient First" },
            { icon: Building2, text: "Modern Clinic" },
            { icon: Clock, text: "Flexible Hours" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center sm:justify-start gap-3 bg-white rounded-full px-4 sm:px-6 py-3 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shrink-0">
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base whitespace-nowrap">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
