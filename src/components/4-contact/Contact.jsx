import React from 'react';
import './contact.css';
export default function Contact() {
  return (
    <section className=' contact-us'>

      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='sub-title' >Contact us for more information and get notifed when I piblish something new</p>


      <div className='flex'>
        <form >
          <div className='flex'>
            <label htmlFor="email">Email Adresse:</label>
            <input type="email" name='' id='email' required />
          </div>


          <div className='flex' style={{marginTop: "24px"}} >

            <label htmlFor="message">Your message:</label>
            <textarea name="" id="message" required ></textarea>

          </div>


          <button className='submit'>submit</button>

        </form>

      </div>

      <div className='border animation'>aaaa




      </div>


    </section>
  )
}
