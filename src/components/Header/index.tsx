import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import { FaAngleDown } from 'react-icons/fa';

export default function Header() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const HandleToggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <Container isDropDownOpen={dropDownOpen}>
      <div className="header-container">
        <div className="topbar-left">
          <div className="wishlist">
            <NavLink to="/wishlist">
              Whishlist<span>(0)</span>
            </NavLink>
          </div>
          <div className="need-help">
            <span onClick={HandleToggleDropDown}>
              Need Help?
              <FaAngleDown />
            </span>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="tel:0000-00-00">0000-00-00</a>
                </li>
                <li>
                  <a href="tel:98936-4586">98936-4586</a>
                </li>
                <li>
                  <a href="">0000-00-00</a>
                </li>
                <li>
                  <a href="">0000-00-00</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="topbar-right">
          <span>Call 24/7 . 800-8754-987</span>
        </div>
      </div>
    </Container>
  );
}
