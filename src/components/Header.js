import { Instagram } from "@material-ui/icons";
import { Facebook, LinkedIn } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import "./Header.css";

export default function Header() {

  const [show,setShow] = useState(false);

  const handleShow = () => {
    if(window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleShow);
    return () => window.removeEventListener("scroll", handleShow)
  })



  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="header__logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="header__navbar">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Support
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Blogs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="header__social">
                <ul>
                    <li><Facebook/></li>
                    <li><Instagram/></li>
                    <li><LinkedIn/></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
