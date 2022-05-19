import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'reactstrap';
import './App.css';

function Song() {
    return (
        <div style={{ width: "190vh", height: "80vh" }} className="container card bg-light">
            <div className="fs-1 fw-bold text-center pt-5 pb-3">List of Songs</div>
            <form style={{ width: "50vh" }} className="d-flex mx-auto">
                <input type="text" className="form-control btn bg-white" placeholder="Add queue"></input>
                <div className="ms-4 pt-2">add!</div>
            </form>

            <div className="d-flex container justify-content-around mt-4">
                <div style={{ width: "20rem", height: "24vh" }} className="card mt-4">
                    <div className='card-body p-0'>
                        <div className="card-title text-center fs-4">Previous-Song</div>
                        <div style={{ width: "10rem", height: "15vh" }} className='d-flex container justify-content-center'>
                            <img src="https://phyblas.hinaboshi.com/rup/sora/2019/kamado-tanjirou-no-uta.jpg"></img>
                        </div>
                        <div className='card-subtitle text-center mt-2'>Kamado Tanjiro no Uta</div>
                    </div>
                </div>

                <div style={{ width: "20rem", height: "24vh" }} className="card mt-4">
                    <div className='card-body p-0'>
                        <div className="card-title text-center fs-4">Current-Song</div>
                        <div style={{ width: "10rem", height: "15vh" }} className='d-flex container justify-content-center'>
                            <img src="https://i.ytimg.com/vi/wTTeu_iEQqA/maxresdefault.jpg"></img>
                        </div>
                        <div className='card-subtitle text-center mt-2'>Nezuko Theme</div>
                    </div>
                </div >

                <div style={{ width: "20rem", height: "24vh" }} className="card mt-4">
                    <div className='card-body p-0'>
                        <div className="card-title text-center fs-4">Next-Song</div>
                        <div style={{ width: "10rem", height: "15vh" }} className='d-flex container justify-content-center'>
                            <img src="https://i.ytimg.com/vi/jwriFosLRww/maxresdefault.jpg"></img>
                        </div>
                        <div className='card-subtitle text-center mt-2'>Homura</div>
                    </div>
                </div>
            </div>


            <div className='fs-2 mt-2'>In queue</div>

            <div className='d-flex row'>

                <div className='d-flex justify-content-between mt-3 col-3'>
                    <div style={{ height: "8vh", width: "15rem" }} className='card shadow me-4 col-8'>
                        <div className='d-flex card-body'>
                            <div className='d-flex'>
                                <div className='d-inline'>
                                    <div className='d-flex'>Dance Monkey</div>
                                    <div className='d-flex text-secondary'>Tones And I</div>
                                </div>
                                <div class="round d-flex ms-5 mt-2">
                                    <input type="checkbox" checked id="checkbox"></input>
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' d-flex justify-content-between mt-3 col-3'>
                    <div style={{ height: "8vh", width: "15rem" }} className='card shadow me-4 col-8'>
                        <div className='d-flex card-body align-items-center'>
                            <div className='d-flex'>
                                <div className='d-inline-blog'>
                                    <div className='d-flex'>Dance Monkey</div>
                                    <div className='d-flex text-secondary'>Tones And I</div>
                                </div>
                                <div class="round d-flex ms-5 mt-2">
                                    <input type="checkbox" checked id="checkbox"></input>
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-3 col-3'>
                    <div style={{ height: "8vh", width: "15rem" }} className='card shadow me-4 col-8'>
                        <div className='d-flex card-body align-items-center'>
                            <div className='d-flex'>
                                <div className='d-inline-blog'>
                                    <div className='d-flex'>Dance Monkey</div>
                                    <div className='d-flex text-secondary'>Tones And I</div>
                                </div>
                                <div class="round d-flex ms-5 mt-2">
                                    <input type="checkbox" checked id="checkbox"></input>
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-3 col-3'>
                    <div style={{ height: "8vh", width: "15rem" }} className='card shadow me-4 col-8'>
                        <div className='d-flex card-body align-items-center'>
                            <div className='d-flex'>
                                <div className='d-inline-blog'>
                                    <div className='d-flex'>Dance Monkey</div>
                                    <div className='d-flex text-secondary'>Tones And I</div>
                                </div>
                                <div class="round d-flex ms-5 mt-2">
                                    <input type="checkbox" checked id="checkbox"></input>
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-3 col-3'>
                    <div style={{ height: "8vh", width: "15rem" }} className='card shadow me-4 col-8'>
                        <div className='d-flex card-body align-items-center'>
                            <div className='d-flex'>
                                <div className='d-inline-blog'>
                                    <div className='d-flex'>Dance Monkey</div>
                                    <div className='d-flex text-secondary'>Tones And I</div>
                                </div>
                                <div class="round d-flex ms-5 mt-2">
                                    <input type="checkbox" checked id="checkbox"></input>
                                    <label for="checkbox"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Song;