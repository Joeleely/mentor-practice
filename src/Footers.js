import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from "reactstrap";
import './App.css'

function Footer() {
    return (
        <div class="container d-flex card bg-light p-3" style={{width:"50vh"}}>
            <img style={{width:"10vh"}} class="rounded mx-auto d-block" src="https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-Images.png"></img>
             <h4 class="text-center mb-5 mx-5 mt-1">Welcome to spotify</h4>
             <div class="mb-3">Please login to your account</div>
            <form class="d-flex">
                <input type="text" class="form-control mb-4" placeholder="Username"></input>
            </form>
            <form class="d-flex">
                <input type="text" class="form-control mb-4" placeholder="Password"></input>
            </form>
            <button class="btn gradient-custom-2 text-light mb-2">Login</button>
            <a href="#" class="text-secondary text-center text-decoration-none mb-4">Forgot password?</a>
            <div class="d-flex">Don't have an account?<a href="#" class="text-decoration-none ms-2">Register</a></div>
        </div>
    );
}

export default Footer;