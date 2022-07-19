import React, { useState } from 'react'
import './Footer.css'

export default function Footer() {

    const submitHandler = e => {
        e.preventDefault()
    }

    const [inputEmail,setInputEmail] = useState('')
    const [inputReview,setInputReview] = useState('')

    const inputEmailHandler = e => {
        setInputEmail(e.target.value)
        
    }

    const inputReviewHandler = e => {
        setInputReview(e.target.value)
        
    }


  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                    <div className='footer__location'>
                        <h3>TechBucket.Pvt Ltd</h3>
                        <p>Thirbam sadak, Baluwatar,
                            Kathmandu, Nepal</p>
                        <p>Phone: +977 014443897</p>
                        <p>www.techbucket.com.np</p>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                    <div className='footer__navigation'>
                        <h5>Navigation</h5>
                        <ul>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Services</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                    <div className='footer__events'>
                        <h5>Events</h5>
                        <p>No Events</p>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                    <div className='footer__review'>
                        <h3>Review Here</h3>
                        <div className='review__forms'>
                            <form onSubmit={submitHandler}>
                                <input value={inputEmail} onChange={inputEmailHandler} type="email" placeholder="Email address"/>
                                <textarea value={inputReview} onChange={inputReviewHandler} type="text" placeholder='Your comment 200 letters'/>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
