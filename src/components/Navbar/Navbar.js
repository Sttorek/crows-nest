import React from "react";
// import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <div className='crowsNest'>
      <h1>Crows <br/> Nest</h1>
      </div>
      <div className='navSec'>
        <div className='box' >Login</div>
        <div className='box'>Account Info</div>
        <div className='box'>About</div>
        <div className='box'>Help</div>
      </div>
    </nav>
  );
}

export default Navbar;