import React, { useState } from 'react';
import ink from '../Ink.mp4';
import piano from '../images/pianoFlower.jpg';
import './header.css'

const Header = () => {
    return (
        <header>
        <img src={piano} className="pianoImg" alt="logo" />
        <video
          className="videoImg"
          autoPlay
          loop
          muted
        >
          <source src={ ink }  type="video/mp4" />
        </video>
        </header>
    );

}

export default Header;