import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

import React from "react";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div>
            <h1>
              Job <span>tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              repudiandae! Beatae, modi exercitationem. Eligendi quod neque hic?
              Ducimus, error illum.
            </p>
            <Link to="/register" type="button" className="btn hero-btn">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="main" className="main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
