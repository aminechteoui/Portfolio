import { useState } from 'react'
import Hero from './components/2_Hero/Hero'
import Header from './components/1_header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'



function App() {


  return (
    <div id='up' className='Container'>
     
      <Header />
      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
     <Contact />
     <div className='divider'></div>
     <Footer />
     <a href="#up">
      <button className=' icon-keyboard_arrow_up  scroll2Top'></button>
      </a>
    </div>
  )
}

export default App
