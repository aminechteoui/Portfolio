import React from 'react';
import './hero.css';
export default function Hero() {
  return (
    <section className='hero flex'>

      <div className='left-section '>
        <div className="parent-avatar flex">
          <img src="./mmm.jpg" className='avatar' alt="" />
          <div className='icon-verified'></div>

        </div>
        <h1 className='title'> Software Engineering Student And MERN Stack Developer </h1>
        <p className='sub-title   '> I am Amine Chteoui, a final-year Software Engineering student and a developer specializing in the MERN Stack (MongoDB, Express.js, React, Node.js).

          Passionate about web development, I create modern, high-performance solutions tailored to users' needs. My expertise includes building dynamic, scalable, and secure web applications.

          Explore my portfolio to discover my projects, background, and technical skills. Feel free to contact me to discuss collaborations or learn more about my work!

        </p>

        <div className="all-icons flex" >
<div className="icon-facebook2"  ></div>
<div className="icon icon-instagram"></div>
<div className="icon icon-github"></div>
<div className="icon icon-linkedin"></div>

        </div>


      </div>

      <div className='right-section animation border'  >
        animation

      </div>
    

    </section>
  )
}
