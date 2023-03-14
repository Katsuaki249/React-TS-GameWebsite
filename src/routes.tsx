import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}
