import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;