import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Events from "./sections/Events";
import Services from "./sections/Services";
// import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Services />
      {/* <Gallery /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

