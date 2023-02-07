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
import {useState, useEffect} from 'react';
// import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setloading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(() => {
      spinner.style.display = "none";
      setloading(false);
    }, 4000);
  }

  return (
      !loading && (
        <>
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
      </>
      )
  );
}

export default App;
