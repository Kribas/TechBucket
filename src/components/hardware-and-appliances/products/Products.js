import React from 'react'
import Banner from '../../Banner'
import Header from '../../Header'
import './Products.css'
import {Link } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'

export default function Products() {
  return (
    <div className='products'>
        <Header/>
        <Banner/>

        <div className='container'>
        <div className="page__nav d-flex align-items-center">
          <Link className="text-decoration-none" to="/">
            <p>
              HOME<ArrowForward />
            </p>
          </Link>
          <Link className="text-decoration-none" to="/hardwareandappliances">
            <p>IT HARDWARE AND APPLIANCES</p>
          </Link>
        </div>
        </div>
    </div>
  )
}
