import About from "./components/About";
import { AboutUs } from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ServicesSection from "./components/Services";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <section className="relative min-h-screen bg-cover bg-center bg-[url('/src/assets/images/herobackground1.jpg')]">
        {/* Blackish bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-40" />
        {/* Content stays above the overlay */}
        <div className="relative z-50">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* Other sections */}
      <About />
      <ServicesSection />
      <AboutUs />

      <Contact />

      <Footer />

    </div>
  );
}
