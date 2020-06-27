import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Appbar.module.css';

import logo from '../../images/logo.svg';

const Appbar = () => {
    return(
        <div className="appbar_style">
          <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top shadow-sm">
            <a className="navbar-brand text-white" href="/"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Covid Tracker" loading="lazy" /> Covid Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item hoverlink">
                  <a className="nav-link text-white" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#summary">Summary</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#symptomps">Symptomps</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#prevention">Prevention</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#diagnosis">Diagnosis</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#footer">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )
}

export default Appbar;