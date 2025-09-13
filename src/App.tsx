import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import Certifications from './components/Certifications';
// import CursorTrail from './components/CursorTrail';
function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        {/* <CursorTrail />         */}
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications/>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;