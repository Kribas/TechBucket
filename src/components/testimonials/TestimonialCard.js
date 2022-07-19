import React from 'react'
import './Testimonials.css';

export default function TestimonialCard({testimonial, name, title}) {
  return (
    <div className='testimonial__card'>
      <p className='testimonial__text'>{testimonial}</p>
      <div className='client__details d-flex'>
        <div className='client__avatar'>
          <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt='Client Avatar'/>
        </div>
        <div className='client__desc'>
          <h6>{name}</h6>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}
