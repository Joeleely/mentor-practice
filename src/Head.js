import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css'

function Header() {
  return (
    <div className="fixed-top" >
      <Navbar dark color="dark">
        <div className="d-flex">
          <img style={{ width: "5vh" }} src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w512"></img>
          <div className="ms-2 fw-bold fs-3">
            <div className="text-light d-flex">Spotify</div>
          </div>
        </div>
        <div className="d-flex">
          <button className="btn btn-dark me-2">Home</button>
          <button className="btn btn-dark">Login</button>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
            <span className="navbar-toggler-icon"></span>
          </button>
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