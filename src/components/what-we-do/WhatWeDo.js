import React from "react";
import WhatWeDoItem from "./WhatWeDoItem";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="what-we-do__title">
          <h3>WHAT WE DO</h3>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link className="text-decoration-none" to="/hardwareandappliances">
              <WhatWeDoItem
                backgroundImage="https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title="IT HARDWARE & APPLIANCES"
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link to="/designanddevelopment" className="text-decoration-none">
              <WhatWeDoItem
                backgroundImage="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw="
                title="DESIGN & DEVELOPMENT"
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <Link to="/manageenterprisesolutions" className="text-decoration-none">

              <WhatWeDoItem
                backgroundImage="https://st2.depositphotos.com/1004061/7948/i/600/depositphotos_79480642-stock-photo-modern-business-skyscrapers.jpg"
                title="MANAGE ENTERPRISE SOLUTIONS"
              />

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
