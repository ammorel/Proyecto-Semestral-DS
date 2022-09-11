// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTGL from './components/NavBarTGL';
import CarouselTGL from './components/CarouselTGL';
import ColRows from './components/ColumnsRows';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<><NavBarTGL /><CarouselTGL /><ColRows /></>} />
            <Route path='/cart' />
          </Routes>
      </div>
  );
}

export default App;