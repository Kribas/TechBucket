import React from 'react'
import News from './News'
import Videos from './Videos'

export default function NewsVideos() {
  return (
    <div className='news__videos'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                    <News/>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                    <Videos/>
                </div>
            </div>
        </div>
    </div>
  )
}
