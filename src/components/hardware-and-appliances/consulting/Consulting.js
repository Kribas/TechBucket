import React from 'react'
import Banner from '../../Banner'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import './Consulting.css'
import { ArrowForward } from '@material-ui/icons'
import Footer from '../../footer/Footer'

export default function Consulting({title, pageNav, navPath}) {
  return (
    <div className='consulting'>
        <Header/>

        <Banner/>

        <div className='container'>
            <div className='page-nav d-flex align-items-center'>
            <Link className="text-decoration-none" to="/">
            <p>HOME <ArrowForward/></p>
          </Link>
          <Link className="text-decoration-none" to={navPath}>
            <p>{pageNav}</p>
          </Link>
            </div>
            <div className='consulting__title'>
                <h3>{title}</h3>
            </div>
            <div className='consulting__diagram'>
                <img className='w-100' src='https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11367-019-01636-4/MediaObjects/11367_2019_1636_Fig1_HTML.png' alt="Consulting Diagram"/>
            </div>

            <div className='consulting__desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed sed porta volutpat, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
