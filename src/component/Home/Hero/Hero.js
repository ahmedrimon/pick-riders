import React, { useState } from 'react';
import './Hero.css';

import bike from '../../../images/bike.jpg';
import bus from '../../../images/bus.jpg';
import car from '../../../images/car.jpg';
import train from '../../../images/train.jpg';

/* react-router-dom */
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <section className="hero-container row">
      <div onClick={handleNavigate} className="col-md-4 col-lg-3">
        <a className="hero-link" href="#">
          <div>
            <img className="img-fluid rounded h-75" src={bike} alt="bike" />
            <h3 className="text-center mt-2">Bike</h3>
          </div>
        </a>
      </div>
      <div onClick={handleNavigate} className="col-md-4 col-lg-3">
        <a className="hero-link col-md-4 col-lg-3" href="/login">
          <div>
            <img className="img-fluid rounded h-75" src={bus} alt="bus" />
            <h3 className="text-center mt-2">Bus</h3>
          </div>
        </a>
      </div>
      <div onClick={handleNavigate} className="col-md-4 col-lg-3">
        <a className="hero-link col-md-4 col-lg-3" href="/login">
          <div>
            <img className="img-fluid rounded h-75" src={car} alt="car" />
            <h3 className="text-center mt-2">Car</h3>
          </div>
        </a>
      </div>
      <div onClick={handleNavigate} className="col-md-4 col-lg-3">
        <a className="hero-link col-md-4 col-lg-3" href="/login">
          <div>
            <img className="img-fluid rounded h-75" src={train} alt="train" />
            <h3 className="text-center mt-2">Train</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
