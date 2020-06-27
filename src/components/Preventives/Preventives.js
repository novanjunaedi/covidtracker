import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Preventives.css';

import prev1 from '../../images/prev1.jpg';
import prev2 from '../../images/prev2.jpg';
import prev3 from '../../images/prev3.jpg';
import prev4 from '../../images/prev4.jpg';
import prev5 from '../../images/prev5.jpg';
import prev6 from '../../images/prev6.jpg';

const Prevention = () => {
    return(
        <div className="container preventives-style">
          <div className="text-title">
            <h1>Prevention</h1>
            <p>Here are some prevention tips that can we do to avoid Covid-19.</p>
          </div>

          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev1} className="card-img-top" alt="Prevention 1" />
              </div>
            </div>
            
            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev2} className="card-img-top" alt="Prevention 2" />
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev3} className="card-img-top" alt="Prevention 3" />
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev4} className="card-img-top" alt="Prevention 4" />
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev5} className="card-img-top" alt="Prevention 5" />
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={prev6} className="card-img-top" alt="Prevention 6" />
              </div>
            </div>

          </div>
        </div>

    )
}

export default Prevention;