import About from "./components/About";
import { AboutUs } from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <section className="relative min-h-screen bg-no-repeat  bg-cover bg-[right] sm:bg-[center_top] bg-[url('/src/assets/images/herobackground1.jpg')]">
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-40" />

        <div className="relative z-50">
          <Navbar />
          <Hero />
        </div>
      </section>
      <About />
      <ServicesSection />
      <AboutUs />

      <Contact />

      <Footer />
    </div>
  );
}
