import React from 'react'
import './NewsVideos.css'

export default function Videos() {
  return (
    <div className='videos'>
        <div className='videos__title'>
          <h3>VIDEOS</h3>
        </div>
        <div className='videos__body'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/6mBO2vqLv38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}
