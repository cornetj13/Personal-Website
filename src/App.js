import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Bio from './components/layout/Bio';
import Projects from './components/layout/Projects';
import Contact from './components/layout/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar />
        <main className='flex flex-col bg-stone-500 main'>
          <Bio />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
