import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Symptomps.css';

import cough from '../../images/cough.jpg';

import fever from '../../images/fever.jpg';
import headache from '../../images/headache.jpg';
import limp from '../../images/limp.jpg';
import outofbreath from '../../images/outofbreath.jpg';
import soretroath from '../../images/soretroath.jpg';

const Symptomps = () => {
    return(
        <div className="container symptomp-style">
          <div className="text-title">
            <h1>Symptomps</h1>
            <p>Most common symptomps</p>
          </div>

          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card h-100">
                <img src={cough} className="card-img-top" alt="Symptomp 1" />
                <div className="card-body">
                  <h5 className="card-title">Dry Cough</h5>
                  <p className="card-text">A dry cough doesn't produce phlegm. It usually starts at the back of the throat and produces a barking or coarse sound.</p>
                </div>
              </div>
            </div>
            
            <div className="col mb-4">
              <div className="card h-100">
                <img src={fever} className="card-img-top" alt="Symptomp 2" />
                <div className="card-body">
                  <h5 className="card-title">Fever</h5>
                  <p className="card-text">A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.</p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={headache} className="card-img-top" alt="Symptomp 3" />
                <div className="card-body">
                  <h5 className="card-title">Headache</h5>
                  <p className="card-text">Headache is the symptom of pain in the face, head, or neck. It can occur as a migraine, tension-type headache, or cluster headache. Frequent headaches can affect relationships and employment.</p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={limp} className="card-img-top" alt="Symptomp 4" />
                <div className="card-body">
                  <h5 className="card-title">Fatigue / Tiredness</h5>
                  <p className="card-text">Fatigue is also known as tiredness, reduced energy, physical or mental exhaustion, or lack of motivation. Causes of fatigue can be psychological, physiological, and physical.</p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={outofbreath} className="card-img-top" alt="Symptomp 5" />
                <div className="card-body">
                  <h5 className="card-title">Shortness of breath</h5>
                  <p className="card-text">Shortness of breath is often described as an intense tightening in the chest, air hunger, difficulty breathing, breathlessness or a feeling of suffocation.</p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card h-100">
                <img src={soretroath} className="card-img-top" alt="Symptomp 6" />
                <div className="card-body">
                  <h5 className="card-title">Sore troath</h5>
                  <p className="card-text">A sore throat is pain, scratchiness or irritation of the throat that often worsens when you swallow.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

    )
}

export default Symptomps;