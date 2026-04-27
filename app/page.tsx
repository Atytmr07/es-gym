import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LifestyleZone from "@/components/LifestyleZone";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";
import BMICalculator from "@/components/BMICalculator";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LifestyleZone />
      <Gallery />
      <Testimonials />
      <Packages />
      <BMICalculator />
      <ContactLocation />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
