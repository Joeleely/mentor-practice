import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="fixed-top" >
      <Navbar dark color="dark">
        <div className="d-flex">
          <img style={{ width: "5vh" }} src="https://spotlightstudio.org/wp-content/uploads/2019/12/image-gallery-spotify-logo-21.png"></img>
          <div className="ms-2 fw-bold fs-3">
            <div className="text-light d-flex">Spotify</div>
          </div>
        </div>
        <div className="d-flex">
          <Link to="/"><button className="btn btn-dark me-2">Home</button></Link>
          <Link to="/song"><button className="btn btn-dark me-2">Login</button></Link>
          <div className='container-fluid'>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">Setting</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar >
    </div>
  );
}

export default Header