import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/newlogo.svg';


function Landing() {
  return(
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Logo"/>


      <main>
        <h1>Faça parte da nossa família</h1>
        <p>Ajude as ONGs que lutam por nossos amiguinhos</p>
      </main>
    

      <div className="location">
        <strong>Curitiba</strong>
        <span>Paraná</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgb(255, 255, 255)"/>
      </Link>


    </div>  
  </div>
  )
}

export default Landing;