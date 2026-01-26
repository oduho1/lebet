import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';
export function App() {
  return <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
}