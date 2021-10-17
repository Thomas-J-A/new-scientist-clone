import React from 'react';

const Header = () => (
  <header>
    <div>

      <div className="header-top">
        <div>
          <span>NEWSLETTERS</span>
          <p>Sign up to read our regular email newsletters</p>
        </div>
        <h1>NewScientist</h1>
        <button type="button">SUBSCRIBE AND SAVE 61%</button>
      </div>

      <div className="header-bottom">
        <nav className="primary-nav">
          <ul>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li id="selected">
              <a href="#">Space</a>
            </li>
            <li>
              <a href="#">Physics</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li className="primary-nav-more">
              <a href="#">More</a>
              <i className="fas fa-angle-double-down" />
              <ul className="primary-nav-dropdown">
                <li>
                  <a href="#">Mind</a>
                </li>
                <li>
                  <a href="#">Environment</a>
                </li>
                <li>
                  <a href="#">Crosswords</a>
                </li>
              </ul>
            </li>
            <li className="secondary-link">
              <a href="#">Shop</a>
            </li>
            <li className="secondary-link">
              <a href="#">Courses</a>
            </li>
            <li className="secondary-link">
              <a href="#">Events</a>
            </li>
            <li className="secondary-link">
              <a href="#">Tours</a>
            </li>
            <li className="secondary-link">
              <a href="#">Jobs</a>
            </li>
          </ul>
        </nav>

        <div className="header-tools">
          <div className="sign-in">
            <i className="fas fa-user" />
            <a href="#">Sign In</a>
          </div>
          <div className="search">
            <i className="fas fa-search" />
            <a href="#">Search</a>
          </div>
        </div>
      </div>
    </div>

  </header>
);

export default Header;
