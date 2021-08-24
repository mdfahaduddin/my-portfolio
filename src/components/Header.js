import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className ="header-wraper">
            <div className="main-info">
                <h1 className ="main-info h1">Web and Mobile Applications Developer</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design","Web Application Development","Mobile Application Development"]}
                typeSpeed = {60}
                backSpeed ={70}
                loop
                 />
                 <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
