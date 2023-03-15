import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="grid-container">
        <div>
          <h3>Address Info</h3>
          <ul>
            <li>
              <span>
                60 29th Street San Francisco, CA 94110 507-Union Trade Center,
                United States of America
              </span>
            </li>
            <li>
              <span>(+00) 123-456-789</span>
            </li>
            <li>
              <a>demo@example.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Information</h3>
          <ul>
            <li>
              <a>Bookmark</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
            <li>
              <a>Lists</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Extras</h3>
          <ul>
            <li>
              <NavLink to="/">Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/">Terms conditions</NavLink>
            </li>
            <li>
              <NavLink to="/">My account</NavLink>
            </li>
            <li>
              <NavLink to="/">About us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our News Letter</h3>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
