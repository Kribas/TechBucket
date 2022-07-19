import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Footer from "../footer/Footer";
import Header from "../Header";
import Testimonials from "../testimonials/Testimonials";
import WhatWeDoItem from "../what-we-do/WhatWeDoItem";
import './HardwareAndAppliances.css';

export default function HardwareAndAppliances({ title }) {
  return (
    <div className="hardware-and-appliances">
      <Header />

      <Banner />

      <div className="container">
        <div className="page-nav">
          <Link className="text-decoration-none" to="/">
            <p>HOME</p>
          </Link>
        </div>

        <div className="hardware-and-appliances__title">
          <h3>{title}</h3>
        </div>

        <div className="hardware-and-appliances__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit
            a, eget enim, quis quam eget nunc egestas. Placerat elementum
            aliquam tincidunt nunc. Tortor fusce fermentum dictum tincidunt
            facilisis amet. Auctor sed sed porta volutpat, consequat. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Luctus sit a,
            eget enim, quis quam eget nunc egestas. Placerat elementum aliquam
            tincidunt nunc. Tortor fusce fermentum dictum tincidunt facilisis
            amet. Auctor sed sed porta volutpat, consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Luctus sit a, eget enim, quis
            quam eget nunc egestas. Placerat elementum aliquam tincidunt nunc.
            Tortor fusce fermentum dictum tincidunt facilisis amet. Auctor sed
            sed porta volutpat, consequat.
          </p>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link className="text-decoration-none" to="/products">
              <WhatWeDoItem
                backgroundImage="https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title="PRODUCTS"
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link to="/hardwareandappliancesservices" className="text-decoration-none">
              <WhatWeDoItem
                backgroundImage="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw="
                title="SERVICES"
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link to='/hardwareandappliancesconsulting' className="text-decoration-none">
              <WhatWeDoItem
                backgroundImage="https://st2.depositphotos.com/1004061/7948/i/600/depositphotos_79480642-stock-photo-modern-business-skyscrapers.jpg"
                title="CONSULTING"
              />
            </Link>
            
          </div>
        </div>


      </div>
      <Testimonials />

      <Footer />
    </div>
  );
}
