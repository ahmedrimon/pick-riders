import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="h2">
            <a className="navbar-brand fs-3" href="/">
              Pick Riders
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Destination
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <a href="/login">
                <button className="button mx-3 fw-bold" type="submit">
                  Login
                </button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
