import React from "react";
import towerImg from './towerImg.jpg'

function Homepage() {
  return (
    <section className='homeCnt'>
      <div className="signUpCnt">
        <p className='signUpTitle'>Sign Up</p>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Company ID
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            First Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Last Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Email
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Password
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <select className="form-select selectMe" aria-label="Default select example">
          <option selected>Role</option>
          <option value="1">Management</option>
          <option value="2">Employee</option>
        </select>

        <button type="button" className="btn btn-primary signUpBtn">Submit</button>
      </div>

      {/* serperate----------------------------------- */}

      <div className='homeImgCnt'>
        <img className='homeImg' src={ towerImg }/>
      </div>
    </section>
  );
}

export default Homepage;
