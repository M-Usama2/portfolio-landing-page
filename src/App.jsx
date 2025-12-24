import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans relative">
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
