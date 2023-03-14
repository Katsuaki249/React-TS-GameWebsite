import * as React from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from './styles';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Main() {
  return (
    <Container>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
