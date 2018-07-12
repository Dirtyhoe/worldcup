import React, { Component } from 'react';
import Main from './main.jpg';
import {
  Link
} from 'react-router-dom'
import Sponsor from './sponsor.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Main} alt="Main" className="Main"/>

        <Link className='mx-auto' to="/login">
          <input type="button" value="Go to Worldcup 2018" className="button mx-auto" />
        </Link>
        <br/>
        <img src={Sponsor} alt="Sponsor" className="Sponsor"/>
        <br/>
        <br/>
        <p>
        Copyright ©2018 Daniel and Song ECE, All rights reserved
        </p>
        </div>
    );
  }
}

export default App;
