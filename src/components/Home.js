import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import NewsVideos from '../components/news-videos/NewsVideos';
import Testimonials from '../components/testimonials/Testimonials';
import WhatWeDo from '../components/what-we-do/WhatWeDo';
import WhoWeAre from '../components/who-we-are/WhoWeAre';

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <Banner/>
      <WhatWeDo/>
      <WhoWeAre/>
      <Testimonials/>
      <NewsVideos/>
      <Footer/>
    </div>
  )
}
