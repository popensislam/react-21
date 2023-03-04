import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Route, Routes, Router, NavLink } from 'react-router-dom';
import AppRouter from './common/AppRouter';

import './index.css'

function sum(a, b) {
  return a + b
}

function App() {

  return (
    <div className="App">

      <NavLink to={'/'}>Main page</NavLink>
      <NavLink to={'/about'}>About page</NavLink>
  
      <AppRouter/>
    </div>
  );
}

export default App;
