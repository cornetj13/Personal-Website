import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Landing />
      <Navbar />
      <div className="bg-lime-900 pt-2 md:pt-8">
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
