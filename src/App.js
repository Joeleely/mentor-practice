import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Header from './Head';
import Footer from './Footers';

const App = (props) => {
  return (
    <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
