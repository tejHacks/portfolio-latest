import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm mt-2">
            © <span className="text-red-400"> {year} </span>
            <span className="text-amber-400 font-bold">
              OLATEJU OLAMIDE EMMANUEL{" "}
            </span>
            <span className="text-emerald-400 font-bold">
              {" "}
              All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
