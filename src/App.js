
import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Gon from './Components/Gon/Gon';
import Roadmap from './Components/Roadmap/Roadmap';
import Vibe from './Components/Vibe/Vibe';
import Services from './Components/Services/Services';
import Faq from './Components/Faq/Faq';
import Portfolio from './Components/Portfolio/Portfolio';
import Progress from './Components/Progress/Progress';
import Contact from './Components/Contact/Contact';
import Where from './Components/Where/Where';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <About />
      <Gon />
      <Where />
      <Roadmap/>
      <Vibe />
      <Services />
      <Faq />
      <Portfolio />
      <Progress />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
