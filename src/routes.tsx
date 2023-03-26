import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Main/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
