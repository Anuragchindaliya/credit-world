import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/about';
import { useAppSelector } from './redux/hooks';
import SingleStore from './pages/singleStore';
import Login from './pages/Login';
import Private from './components/Layout/Private';

function App() {
  const isDarkMode = useAppSelector((state) => state.appTheme.darkTheme)
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          {/* <Header /> */}
          <Route element={<Private />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store/:id' element={<SingleStore />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
