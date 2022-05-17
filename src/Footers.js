import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from "reactstrap";
import './App.css';

function Footer() {
    return (
        <div className="d-flex">
            <div className="d-flex card bg-light p-3" style={{ width: "50vh" }}>
                <img style={{ width: "10vh" }} className="rounded mx-auto d-block" src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w512"></img>
                <h4 className="text-center mb-5 mx-5 mt-1">Welcome to spotify</h4>
                <div className="mb-3">Please login to your account</div>
                <form className="d-flex">
                    <input type="text" className="form-control mb-4" placeholder="Username"></input>
                </form>
                <form className="d-flex">
                    <input type="password" className="form-control mb-4" placeholder="Password"></input>
                </form>
                <button className="btn gradient-custom-2 text-light mb-2">Login</button>
                <a href="#" className="text-secondary text-center text-decoration-none mb-4">Forgot password?</a>
                <div className="d-flex">Don't have an account?<a href="#" className="text-decoration-none ms-2">Register</a></div>
            </div>
            <div className="d-flex">
                <div className="d-flex card bg-light p-5" style={{ width: "40vh" }}>
                    <img className="mx-auto mt-5 mb-4 pt-4" style={{ width: "30vh" }} src="https://cdn.discordapp.com/attachments/948444339451883540/976027495138746378/unknown.png"></img>
                    <div className="text-center h4">Unable to login?</div>
                    <div className="text-center">Listen to some music, relax yourself, and take a deep breath until yyou van remember your password.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;