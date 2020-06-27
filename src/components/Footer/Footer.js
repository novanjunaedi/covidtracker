import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return(
     <div>
        <div className="container style">
          <div className="title">
            <h1>About</h1>
            <p>
            Covid Tracker is a web app that provides the latest information on the spread of Covid-19 and self-checking of the possibility of contracting the virus with an Expert System. Developed by Kelompok 2 for submitting Expert System courses. Disclaimer : The diagnosis results are not 100% accurate. Please contact the relevant hospital for more accurate results.
            This web is using Public API  for Covid-19.
            </p>
          </div>
        </div>
        <footer className="page-footer font-small footer bg-primary">
          <div className="footer-copyright text-light text-center py-3">
            © 2020 - Covid Tracker. All rights reserved.
          </div>
        </footer>
     </div>
      
    )
}

export default Footer;