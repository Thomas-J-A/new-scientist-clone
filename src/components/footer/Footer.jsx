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

      <button type="button">COOKIE SETTINGS</button>

      <div>
        <div>
          <p>GET THE APP</p>
          <button type="button">Download on the App Store</button>
          <button type="button">Get it on Google Play</button>
        </div>
        <div>
          <p>FOLLOW US</p>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
    </div>

    <div>
      <small>&copy;Copyright New Scientist Ltd.</small>
      <a href="#">Back to top</a>
      <i className="far fa-arrow-alt-circle-up" />
    </div>
  </footer>
);

export default Footer;
