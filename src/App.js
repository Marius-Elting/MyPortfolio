import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Aos from "aos";
import { useEffect } from "react";
import AboutMe from './pages/AboutMe/AboutMe';
import AllProjects from './components/Projects/AllProjects/AllProjects';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('scroll', scrollHandler, { passive: true });
  }, []);


  const scrollHandler = () => {
    const scrollpos = window.pageYOffset;
    const body = document.getElementsByTagName("body")[0];
    const scrollButton = document.querySelector(".scrolldown");
    body.style.transition = " all .6s linear";
    // body.style.background = "linear-gradient(to bottom, green, blue)"
    // if (scrollpos <= 350) body.style.backgroundColor = "#002855";
    // if (scrollpos >= 350) body.style.backgroundColor = "#0a2e71";
    // if (scrollpos >= 750) body.style.backgroundColor = "#023E7D";

    if (scrollpos >= 50) scrollButton.style.opacity = "0";
    else {
      scrollButton.style.opacity = "1";
    }
  };


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />^
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contactme" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;