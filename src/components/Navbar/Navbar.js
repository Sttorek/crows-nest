import React from "react";
// import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <div className='crowsNest'>
      <h1><span>C</span>ro<span>w</span>'s <span>N</span>est</h1>
      <p className="statement">Project Management Made Easy</p>
      </div>
      <div className='navSec'>
        <div className='box effect1' >Login</div>
        <div className='box effect1'>Account Info</div>
        <div className='box effect1'>About</div>
        <div className='box effect1'>Help</div>
      </div>
    </nav>
  );
}

export default Navbar;