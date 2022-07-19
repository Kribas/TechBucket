import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Testimonials.css';
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

    const options = {
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        responsiveClass:true,
        margin: 20,
        responsive:{

          0:{
  
              items:1
  
          },
  
          600:{
  
              items:1
  
          },
  
          1000:{
  
              items:4,
  
              loop:true
  
          }
  
      }
  }


  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__title">
          <h3>CUSTOMER TESTIMONIALS</h3>
        </div>
        <div className="testimonials__body">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
            <div className="item">
            <TestimonialCard name="Mr Ashim Timalsina" title="Support Engineer" testimonial="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Luctus sit a, 
                eget enim, quis quam eget nunc 
                egestas. Placerat elementum aliquam 
                tincidunt nunc. Tortor fusce 
                fermentum dictum tincidunt facilisis 
                amet. Auctor sed sed porta volutpat, 
                consequat."/>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
    </div>
  );
}
