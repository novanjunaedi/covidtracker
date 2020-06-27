import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

const Hero = () => {
    return(
        <div>
          <div className="jumbotron jumbotron-fluid hero">
            <div className="container hero-con">
              <h1 className="display-4">Welcome to Covid Tracker</h1>
              <p className="bold">Track the latest information of Covid-19.</p>
              <a className="btn btn-lg btn-hero btn-primary" href="#summary" role="button">See summary</a>
            </div>
          </div>
          <div id="summary" />
        </div>

    )
}

export default Hero;