import React from "react";
import Banner from "../../Banner";
import Header from "../../Header";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import './Services.css';
import Footer from "../../footer/Footer";

export default function Services({ title, pageNav, navPath }) {
  return (
    <div className="services">
      <Header />
      <Banner />

      <div className="container">
        <div className="page__nav d-flex align-items-center">
          <Link className="text-decoration-none" to="/">
            <p>
              HOME <ArrowForward />{" "}
            </p>
          </Link>
          <Link className="text-decoration-none" to={navPath}>
            <p>{pageNav}</p>
          </Link>
        </div>

        <div className="services__title">
          <h3>{title}</h3>
        </div>

        <div className="services__desc">
          <p>
            The era of digitalization taking over has resulted in a rapid
            increase in the use of technology in business.This has affected
            every industry. Though working has become easier and more fun.Yet
            question remains how much is it worth Investing in Technology? Every
            other vendor will say their products are best, you need to install
            this product,If you do not install this then you are doomed.The
            question still remains untouched here: Do we really need to invest
            in all that?Opening or Running a Business has become hard for
            non-technical people. Tech Bucket Pvt Ltd provides free counseling
            regarding the needs of technology based on customer needs and
            requirements.We will help you plan your IT investments according to
            your requirement and needs and moreover planning that fits your
            budget.
          </p>
        </div>

        <div className="services__video">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/6mBO2vqLv38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="services__desc">
          <p>
            The era of digitalization taking over has resulted in a rapid
            increase in the use of technology in business.This has affected
            every industry. Though working has become easier and more fun.Yet
            question remains how much is it worth Investing in Technology? Every
            other vendor will say their products are best, you need to install
            this product,If you do not install this then you are doomed.The
            question still remains untouched here: Do we really need to invest
            in all that?Opening or Running a Business has become hard for
            non-technical people. Tech Bucket Pvt Ltd provides free counseling
            regarding the needs of technology based on customer needs and
            requirements.We will help you plan your IT investments according to
            your requirement and needs and moreover planning that fits your
            budget.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
