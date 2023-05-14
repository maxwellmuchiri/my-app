import React from 'react';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './Commponents/Navbar';
import LandingPage from './Commponents/Landingpage';
import Cart from './Commponents/Cart';
import LogIn from './Commponents/Login';
import SignUp from './Commponents/Signup';
import Footer from './Commponents/Footer';

function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
