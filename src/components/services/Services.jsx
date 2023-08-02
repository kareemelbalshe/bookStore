import React from 'react'
import "./services.css"

export default function Services() {
  return (
    <>
        <div className='services'>
            <div className="service-item">
                <i className="bi bi-truck"></i>
                <b>Free Shopping</b>
            </div>
            <div className="service-item">
                <i className="bi bi-gift"></i>
                <b>Gift Card</b>
            </div>
            <div className="service-item">
                <i className="bi bi-arrow-clockwise"></i>
                <b>7 Days Return</b>
            </div>
            <div className="service-item">
                <i className="bi bi-send"></i>
                <b>Contact Us</b>
            </div>
        </div>
    </>
  )
}
