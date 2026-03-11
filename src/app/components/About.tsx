import { motion } from "motion/react";
import { Award, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Dentists",
    description: "Our team of qualified dental professionals brings years of expertise and dedication to your care.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Zap,
    title: "Advanced Equipment",
    description: "State-of-the-art dental technology for precise, efficient, and comfortable treatments.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Comfortable Treatment",
    description: "We prioritize your comfort with gentle care and a relaxing, modern clinic environment.",
    color: "from-teal-400 to-teal-600",
  },
];

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About Orestes Dental Rugby Ltd
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional dental care in a warm, welcoming environment. 
            Our modern clinic combines cutting-edge technology with a patient-first approach, ensuring 
            every visit is comfortable and stress-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-3xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* 3D Icon container */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* 3D shadow effect */}
                  <div className={`absolute top-2 left-2 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-sm -z-10`} />
                </div>

                <h3 className="mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
