import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AppointmentBooking } from "./components/AppointmentBooking";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StickyBookButton } from "./components/StickyBookButton";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <AppointmentBooking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyBookButton />
      <WhatsAppButton />
    </div>
  );
}