import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
