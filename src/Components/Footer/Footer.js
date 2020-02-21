import React from 'react';
import Home from './Home.js';
import Restart from './Restart.js';
import Send from './Send.js';
import './Footer.css';


const Footer = (props) => {

    return (

        <div className="footer"> 
            <Send setNextStep={props.setNextStep} />
            <Restart />
            <Home />
        </div>


    )
}

export default Footer;