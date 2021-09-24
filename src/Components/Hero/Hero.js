import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" id="home">
        <div className="hero__content">
            <h1>Welcome To</h1>
            <h1>TurboOctane</h1>
            <p>Automobile Blogs,News & More.</p>
            <a href="/Blog" className="button">Explore</a>
        </div>
    </div>
    )
}

export default Hero;
