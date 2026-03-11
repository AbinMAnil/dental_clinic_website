import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "2024-12-24", // Default from image
    time: "14:40",      // Default from image
    reason: "other",    // Default from image
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booking:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        date: "2024-12-24",
        time: "14:40",
        reason: "other",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative py-24 overflow-hidden" id="appointment-booking">
      {/* Background with Blur effect from reference */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/appointment-bg.png" 
          alt="Dental Clinic" 
          className="w-full h-full object-cover filter blur-[2px] opacity-20"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[#86d4c1] font-bold tracking-widest text-sm mb-4">
            FORM CONSULTATION
          </p>
          <h2 className="text-[#3b53a4] text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
            Schedule your next dental appointment today
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[40px] shadow-[0_10px_50px_rgba(59,83,164,0.1)] border border-gray-100/50 p-6 md:p-14"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="mb-4 text-green-600 text-2xl font-bold">
                  Booking Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing our clinic. We'll contact you shortly to confirm your appointment.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#3b53a4] hover:bg-[#2d4185] text-white rounded-full px-8 py-6 h-auto text-lg transition-all duration-300"
                >
                  Book Another Appointment
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Name and Phone */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-[#3b53a4] text-lg font-bold ml-1">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Type your name"
                      required
                      className="h-14 rounded-full px-6 border border-gray-200 focus:border-[#3b53a4] focus:ring-[#3b53a4]/20 bg-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[#3b53a4] text-lg font-bold ml-1">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Type your phone number"
                      required
                      className="h-14 rounded-full px-6 border border-gray-200 focus:border-[#3b53a4] focus:ring-[#3b53a4]/20 bg-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Row 2: Date and Time */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-[#3b53a4] text-lg font-bold ml-1">
                      Preferred date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                        className="h-14 rounded-full pl-14 pr-12 border border-gray-200 focus:border-[#3b53a4] focus:ring-[#3b53a4]/20 bg-white appearance-none"
                      />
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="time" className="text-[#3b53a4] text-lg font-bold ml-1">
                      Preferred time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        required
                        className="h-14 rounded-full pl-14 pr-16 border border-gray-200 focus:border-[#3b53a4] focus:ring-[#3b53a4]/20 bg-white appearance-none"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                        <span className="text-gray-400 font-medium">PM</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Reason for visit (Radio Group) */}
                <div className="space-y-4">
                  <Label className="text-[#3b53a4] text-lg font-bold ml-1">
                    Reason for visit
                  </Label>
                  <RadioGroup 
                    value={formData.reason} 
                    onValueChange={(value) => handleChange("reason", value)}
                    className="flex flex-wrap gap-x-8 gap-y-4 ml-1"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="routine" id="r1" className="bg-white border-[#3b53a4] text-[#3b53a4] size-5" />
                      <Label htmlFor="r1" className="text-gray-600 font-medium text-base">Routine checkup</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="new" id="r2" className="bg-white border-[#3b53a4] text-[#3b53a4] size-5" />
                      <Label htmlFor="r2" className="text-gray-600 font-medium text-base">New patient</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="other" id="r3" className="bg-white border-[#3b53a4] text-[#3b53a4] size-5" />
                      <Label htmlFor="r3" className="text-gray-600 font-medium text-base">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-[#3b53a4] text-lg font-bold ml-1">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Type your message"
                    rows={5}
                    className="rounded-3xl p-6 border border-gray-200 focus:border-[#3b53a4] focus:ring-[#3b53a4]/20 bg-white placeholder:text-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-[#3b53a4] hover:bg-[#2d4185] text-white rounded-full px-12 py-5 h-auto text-lg font-medium transition-all duration-300 shadow-lg shadow-[#3b53a4]/20"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
