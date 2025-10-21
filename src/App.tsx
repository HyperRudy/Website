import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Languages from './components/Languages';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Languages />
        <Contact />
      </div>
    </div>
  );
}

export default App;