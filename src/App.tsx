
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            Built <span className="text-red-400">and </span>   <span className="text-amber-400">designed</span> by{' '}
            <span className="text-emerald-400 font-bold">tej{'{}'}</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 Olateju Olamide Emmanuel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;