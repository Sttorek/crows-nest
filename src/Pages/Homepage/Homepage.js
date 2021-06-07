import React from "react";
import towerImg from "./towerImg.jpg";

function Homepage() {
  return (
    <section className="homeCnt">
      <div className="signUpCnt effect2">
        <p className="signUpTitle">Sign Up</p>

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

        <select
          className="form-select selectMe"
          aria-label="Default select example"
        >
          <option selected>Role(Choose One)</option>
          <option value="1">Management</option>
          <option value="2">Employee</option>
        </select>

        <div class="button" id="button-7">
          <div id="dub-arrow">
            <img
              src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
              alt=""
            />
          </div>
          <a className='submitt' href="#">Let's Go!</a>
        </div>


      </div>

      {/* serperate----------------------------------- */}

      <div className="homeImgCnt">
        <img className="homeImg" src={towerImg} />
      </div>
    </section>
  );
}

export default Homepage;
