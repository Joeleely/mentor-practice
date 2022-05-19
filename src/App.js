import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Header from './Head';
import Footer from './Footers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Song from './Song';

const App = (props) => {
  return (
    <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Footer />}/>
        <Route path="/song" element={<Song />}/>
      </Routes>
    </div>
  );
};

export default App;
