import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import { FaBars, FaSearch, FaRegUser, FaShoppingBag } from 'react-icons/fa';

export default function Navbar() {
  return (
    <Container>
      <button type="button" className="sidebar-btn">
        <FaBars />
      </button>
      <div className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img
              alt="Gamehoak"
              src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/themes/gamehoak/images/codezeel/logo.png"
            />
          </NavLink>
        </div>
        <div className="navbar-center">
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">
                  <span>Shop</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/media">
                  <span>Media</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/short-code">
                  <span>ShortCode</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/features">
                  <span>Features</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-right">
          <div>
            <button>
              <FaSearch />
            </button>
            <form>
              <input type="text" />
            </form>
          </div>
          <div>
            <NavLink to="/">
              <FaRegUser />
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <FaShoppingBag />
              <span>(0) R$0,00</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
