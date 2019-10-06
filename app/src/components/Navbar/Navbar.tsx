import React from 'react';
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        editor-output-gallery
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/gallery" className="navbar-item">Gallery</Link>
      </div>
    </div>
  </nav>
);
