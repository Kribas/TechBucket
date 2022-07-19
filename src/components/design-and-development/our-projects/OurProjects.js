import React from "react";
import Banner from "../../Banner";
import Header from "../../Header";
import { ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./OurProjects.css";
import Footer from "../../footer/Footer";

export default function OurProjects() {
  return (
    <div className="our-projects">
      <Header />
      <Banner />

      <div className="container">
        <div className="page-nav d-flex align-items-center">
          <Link className="text-decoration-none" to="/">
            <p>
              HOME <ArrowForward />
            </p>
          </Link>
          <Link className="text-decoration-none" to="/designanddevelopment">
            <p>DESIGN AND DEVELOPMENT</p>
          </Link>
        </div>

        <div className="our-projects__title">
          <h3>OUR PROJECTS</h3>
        </div>

        <div className="our-projects__body">
          <Link className="text-decoration-none" to="/webandapplication">
          <div className="row top-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="web-and-application__left">
                <h3>WEB AND APPLICATION</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat
                  elementum aliquam tincidunt nunc. Tortor fusce fermentum
                  dictum tincidunt facilisis amet. Auctor sed sed porta
                  volutpat, consequat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc
                  egestas. Placerat elementum aliquam tincidunt nunc. Tortor
                  fusce fermentum dictum tincidunt facilisis amet. Auctor sed
                  sed porta volutpat, consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Luctus sit a, eget enim, quis
                  quam eget nunc egestas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="web-and-application__right">
                  <img className="img-fluid" src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw=" alt="Project Image"/>
                </div>
            </div>
          </div>
          </Link>
          
          <div className="row mid-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="ui-design__left">
                <img className="img-fluid" src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw=" alt="Project Image"/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="ui-design__right">
                <h3>UI DESIGN</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat
                  elementum aliquam tincidunt nunc. Tortor fusce fermentum
                  dictum tincidunt facilisis amet. Auctor sed sed porta
                  volutpat, consequat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc
                  egestas. Placerat elementum aliquam tincidunt nunc. Tortor
                  fusce fermentum dictum tincidunt facilisis amet. Auctor sed
                  sed porta volutpat, consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Luctus sit a, eget enim, quis
                  quam eget nunc egestas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</p>
              </div>
            </div>
              
          </div>

          <div className="row bottom-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="social-media__left">
              <h3>SOCIAL MEDIA FLYERS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus sit a, eget enim, quis quam eget nunc egestas. Placerat
                  elementum aliquam tincidunt nunc. Tortor fusce fermentum
                  dictum tincidunt facilisis amet. Auctor sed sed porta
                  volutpat, consequat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Luctus sit a, eget enim, quis quam eget nunc
                  egestas. Placerat elementum aliquam tincidunt nunc. Tortor
                  fusce fermentum dictum tincidunt facilisis amet. Auctor sed
                  sed porta volutpat, consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Luctus sit a, eget enim, quis
                  quam eget nunc egestas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="social-media__right">
              <img className="img-fluid" src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw=" alt="Project Image"/>
              </div>
            </div>
              
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
