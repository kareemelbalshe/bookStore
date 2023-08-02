import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <section className='contact'>
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            address
          </div>
          <p className="contact-item-text">egypt</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            phone
          </div>
          <p className="contact-item-text">0123456789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            email
          </div>
          <p className="contact-item-text">kareem@gmail.com</p>
        </div>
      </div>
      <form action="" onSubmit={(e)=>e.preventDefault()} className='contact-form'>
        <h2 className="contact-form-title">contact us form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder='name *' />
          <input type="text" placeholder='subject *' />
          <input type="text" placeholder=' email *' />
        </div>
        <textarea name="" placeholder='your message *' rows="5"></textarea>
        <button className="contact-btn">send</button>
      </form>
    </section>
  )
}
