import Hero from './components/2_Hero/Hero'
import Header from './components/1_header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import Skills from './components/6-Skills/Skills';
import { useEffect, useState } from "react";



function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id='up' className='Container'>
     
      <Header />
      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Skills />
      <div className='divider'></div>
     <Contact />
     <div className='divider'></div>
     <Footer />
     <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  )
}

export default App
