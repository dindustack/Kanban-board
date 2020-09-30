import React from "react";
import profile from "../assets/avatar.png";

export const Header = () => {
  return (
    // ------------------ NAVBAR ----------------------------------
    <nav className="navbar navbar-expand-lg navbar-light theme-color">
      <div className="container">
        {/* --------  Brand --------- */}
        <a className="navbar-brand" href="action">
          <h1 className="text-white">Productive</h1>
        </a>

        <div className="media media-pill align-items-center d-md-none">
          <span className="avatar rounded-circle">
            <img src={profile} alt="avatar" />
          </span>
        </div>

        {/* ------------ Right Navigation Menu ----------------------- */}
        <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
          <li className="nav-item">
            {/* ------- Profile picture ------- */}
            <div className="media media-pill align-items-center">
              <span className="avatar rounded-circle">
                <img src={profile} alt="avatar" />
              </span>
              {/* ----------- Profile Name ---------------- */}
              <div className="ml-2 d-none d-lg-block">
                <span className="mb-0 small font-weight-bold text-white">Chinwendu</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
