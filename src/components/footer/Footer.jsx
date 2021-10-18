import React from 'react';

const Footer = () => (
  <footer>
    <div>
      <p>Sign up to our newsletters</p>

      <form>
        <label for="input-email">
          Enter your email address to get started
        </label>
        <input id="input-email" type="email" placeholder="Your email" />
        <button type="submit">SIGN UP</button>
      </form>

      <ul>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
        <li>
          <a href="#">Cookie policy</a>
        </li>
        <li>
          <a href="#">Terms & conditions</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">Advertise</a>
        </li>
        <li>
          <a href="#">Write for us</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Science jobs</a>
        </li>
        <li>
          <a href="#">Syndication</a>
        </li>
        <li>
          <a href="#">RSS feeds</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">Gift subscriptions</a>
        </li>
        <li>
          <a href="#">Student subscriptions</a>
        </li>
        <li>
          <a href="#">Educational subscriptions</a>
        </li>
        <li>
          <a href="#">Corporate subscriptions</a>
        </li>
      </ul>

      <button className="cookie-settings-btn" type="button">MANAGE PREFERENCES</button>

      <div className="app-socials-wrapper">
        <div className="app-wrapper">
          <p>GET THE APP</p>
          <button id="ios-app-btn" type="button" />
          <button id="android-app-btn" type="button" />
        </div>
        <div className="social-media-wrapper">
          <p>FOLLOW US</p>
            <div>
              <a className="social-btn facebook" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="social-btn twitter" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="social-btn linkedin" href="#">
              <i className="fab fa-linkedin-in" />
              </a>
              <a className="social-btn pinterest" href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
        </div>
      </div>
    </div>

    <div className="footer-additional">
      <small>&copy; Copyright New Scientist Ltd.</small>
      <div className="back-to-top">
        <a href="#">Back to top</a>
        <a href="#">
          <i className="far fa-arrow-alt-circle-up" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
