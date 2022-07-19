import React from 'react'
import './WhoWeAre.css';
import { ArrowForward } from "@material-ui/icons";


export default function WhoWeAre() {
  return (
    <div className='who-we-are'>
        <div className='container'>
            <div className='who-we-are__inner'>
            <div className='who-we-are__title'>
                <h3>WHO WE ARE</h3>
                
            </div>
            <div className='who-we-are__desc'>
                <p>TechBucket was founded with the aim to enable entrepreneurs, small businesses, and enterprises with the best technological expertise, guidance, and support for achieving efficiency and growth. Our team is composed of energetic and qualified professionals who specialize in networking, system and security, hardware and software solutions, and web designing with the primary goal to deliver the products and technical capabilities to the customer in the best possible way.
                <span className='see-more'> See More <ArrowForward/> </span>
                </p>
            </div>
            </div>
            
        </div>
    </div>
  )
}
