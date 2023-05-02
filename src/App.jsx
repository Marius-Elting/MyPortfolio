import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Aos from "aos";
import { useEffect, useState } from "react";
import AboutMe from './pages/AboutMe/AboutMe';
import AllProjects from './pages/AllProjects/AllProjects';
import ContactPage from './pages/ContactPage/ContactPage';
import DataPolicy from './pages/Policy/Policy';
import Error404Page from './pages/404Page/404Page';
import Impressum from './pages/Impressum/Impressum';
import Footer from './components/Footer/Footer';

function App() {
  const [lang, setLang] = useState("English")


  const changeLangHandler = (param) => {
    setLang(param)
    sessionStorage.setItem("Language", param)
  }
  if (!sessionStorage.getItem("Language")) {
    changeLangHandler("English")
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener('scroll', scrollHandler, { passive: true });
  }, []);


  const scrollHandler = () => {
    const scrollpos = window.pageYOffset;
    const body = document.getElementsByTagName("body")[0];
    const scrollButton = document.querySelector(".scrolldown");
    body.style.transition = " all .6s linear";
    if (scrollButton) {
      if (scrollpos >= 50) scrollButton.style.opacity = "0";
      else {
        scrollButton.style.opacity = "1";
      }
    }
  };


  return (
    <>
      <Router>
        <Header setLang={changeLangHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />^
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contactme" element={<ContactPage />} />
          <Route path="/privatepolicy" element={<DataPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<Error404Page />} status={404} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;