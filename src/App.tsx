import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Connect from './page/Connect';
import Home from './page/Home';
import Login from './page/Login';
import Presentation from './page/Presentation';
import Video from './page/video';



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/Connect" element={<Connect/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Presentation" element={<Presentation/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/Presentation/video" element={<Video/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
