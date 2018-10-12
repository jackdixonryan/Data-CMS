import React, { Component } from 'react';
import './navbar.css';

// Defining a Navbar component. Will need conditional rendering when Oauth is added to the broader structure.
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo right black-text"><i className="fas fa-info"></i></a>
          <ul id="nav-mobile">
            <li><a href="/login" className="black-text">login</a></li>
            <li><a href="/create" className="black-text">+</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;