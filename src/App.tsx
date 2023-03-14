import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';

import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <AppRoutes />
      </Theme>
    </BrowserRouter>
  );
}
