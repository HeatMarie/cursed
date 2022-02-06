import React, { useState } from 'react';
import ink from '../Ink.mp4';
import piano from '../images/pianoFlower.jpg';
import './header.css'

const Header = () => {
    const [currentPage, setCurrentPage] = useState('Info');
    return (
        <header>
        <img src={piano} className="pianoImg" alt="logo" />
        <video
          className="videoImg"
          autoPlay
          loop
        >
          <source src={ ink }  type="video/mp4" />
        </video>
        </header>
    );

}

export default Header;