// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import { AboutUs } from './components/AboutUs'

// export default function App() {
//   return (
//     <div className="bg-black text-white font-sans">

//       <section className="relative min-h-screen bg-cover bg-center bg-[url('/src/assets/images/herobackground1.jpg')]">
//       <div className=" z-10">
//         <Navbar />
//         <Hero />
//       </div>
//       </section>
//       <About />
//       <Services />
//       <AboutUs/>
//       <Contact />
//       <Footer />
//     </div>
//   )
// }


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AboutUs } from './components/AboutUs'

// export default function App() {
//   return (
//     <div className="bg-black text-white font-sans">
//       <section className="relative min-h-screen bg-cover bg-center bg-[url('/src/assets/images/herobackground1.jpg')]">
//         <div className="z-10">
//           <Navbar />
//           <Hero />
//         </div>
//       </section>
//       <About />
//       <Services />
//       <AboutUs/>
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

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
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
