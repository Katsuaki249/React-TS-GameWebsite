import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
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
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Extras</h3>
          <ul>
            <li></li>
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
