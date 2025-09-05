import React from 'react';
import './Hero.css'; // Custom styles

const Hero = () => {
  return (
    <div className="hero-container text-white">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">A<span>V</span><span>O</span></a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['Home', 'About', 'Work', 'Blog', 'Contact'].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a className={`nav-link ${item === 'Home' ? 'active text-danger' : ''}`} href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container hero-content d-flex justify-content-between align-items-center">
        <div className="left">
          <h1 className="display-5 fw-bold">WE CREATE MODERN & MINIMAL WEBSITE</h1>
          <p className="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className="btn btn-danger px-4 py-2">Explore Projects</button>
        </div>
        <div className="right text-end">
          <h1 className="display-4 text-danger">21</h1>
          <p className="fs-5">Years of Experienced</p>
        </div>
      </div>

      <div className="play-button text-center">
        <i className="bi bi-play-circle-fill text-danger fs-1"></i>
      </div>
    </div>
  );
};

export default Hero;


