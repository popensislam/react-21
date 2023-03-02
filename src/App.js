import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Route, Routes, Router, NavLink } from 'react-router-dom';
import ClassComp from './ClassComp';
import AppRouter from './common/AppRouter';
import { routes } from './common/routeConfig';
import ExmMemo from './components/ExmMemo';
import ErrorBoundary from './ErrorBoundary';

import './index.css'
import AboutPage from './pages/AboutPage';
import IdTodo from './pages/IdTodo';
import MainPage from './pages/MainPage';

function sum(a, b) {
  return a + b
}

function App() {

  const [ value, setValue ] = useState('')

  const [ isShow, setIsShow ] = useState(false)

  const [math, setMath ] = useState({
    a: 2,
    b: 4
  })

  // const log = useCallback((title) => {
  //   console.log(title)
  // }, [])

  const amount = useMemo(() => {
    return sum(math.a, math.b)
  }, [math.a, math.b])

  return (
    <div className="App">
      {/* <input value={value} onChange={(e) => setValue(e.target.value)}/> */}
      {/* <ExmMemo log={log} amount={amount}/> */}

      <NavLink to={'/'}>Main page</NavLink>
      <NavLink to={'/about'}>About page</NavLink>
  
      <AppRouter/>
    </div>
  );
}

export default App;
