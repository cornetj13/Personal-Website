import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Landing />
      <Navbar />
      <main className="bg-lime-900 main-layout">
        {/* Placeholder element for Navbar */}
        <div style={{ height: '64px' }}></div>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
