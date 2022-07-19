import React from 'react'
import './WhatWeDo.css';

export default function WhatWeDoItem(props) {

  return (
    <div>
      <div className='body__card' style={{
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
            <div className='card__inner'>
                <h2>{props.title}</h2>
            </div>
    </div>
      
    </div>
    
  )
}
