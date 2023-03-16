import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import { TiArrowForwardOutline } from 'react-icons/ti';

export default function Footer() {
  return (
    <Container>
      <div className="footer-container">
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
              <li>
                <p>
                  There are many variations of passages of form humour or
                  randomised
                </p>
              </li>
              <li>
                <form method="post" action="">
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <button type="button">
                      <TiArrowForwardOutline />
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <div className="content">
            <div>
              <span>Copyright © 2023 Codezeel</span>
            </div>
            <div className="card-flags">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
