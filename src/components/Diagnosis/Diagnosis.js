import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Diagnosis.css';
import doctor from '../../images/doctor.png';

const Diagnosis = () => {
    return(
        <div>
          <div className="jumbotron jumbotron-fluid diagnosis">
            <div className="container d-flex align-content-center">
              <div className="p-2 flex-fill">
                <img src={doctor} className="doc-image" alt="Doctor Icon" />
              </div>
              <div className="content-diagnosis p-2 flex-fill cent">
                <h3>Diagnosis</h3>
                <p className="lead">Check the symptomps of Covid-19 with our expert system.</p>
                <a className="btn btn-lg btn-primary mt-4" href="https://covidcheck-cf.web.app" role="button">Check now!</a>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Diagnosis;