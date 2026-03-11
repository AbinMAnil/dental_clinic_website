import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 High Street", "Rugby, Warwickshire", "CV21 3AB, UK"],
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 1234 567890", "Emergency: +44 1234 567891"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@orestesdental.co.uk", "emergency@orestesdental.co.uk"],
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
    color: "from-purple-400 to-purple-600",
  },
];

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Contact us for appointments, questions, or emergency dental care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* 3D shadow */}
                  <div className={`absolute w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} opacity-20 blur-md -z-10 mt-[-56px] ml-2`} />
                </div>

                {/* Content */}
                <h3 className="mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* 3D Frame effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38914.77598828125!2d-1.2863892!3d52.3707371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774a6a8d1d8c95%3A0x2b7c1c0c0c0c0c0c!2sRugby%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Emergency Contact Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-red-500 text-white rounded-2xl p-4 shadow-xl backdrop-blur-sm border border-red-400"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">24/7 Emergency Dental Care</p>
                    <p className="text-sm text-red-100">Call: +44 1234 567891</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
