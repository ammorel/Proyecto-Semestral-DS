// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTGL from './components/NavBarTGL';
import CarouselTGL from './components/CarouselTGL';
import ColRows from './components/ColumnsRows';
import Cart from './components/Cart';
import Info from './components/Info';
import Contacto from './components/Contacto';
import APedido from './components/APedido';
import Anillos from './components/Anillos';
import Pulseras from './components/Pulseras';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <NavBarTGL />
          <Routes>
            <Route path='/' element={<><CarouselTGL /><ColRows /></>}/>
            <Route path='/informacion' element={<Info />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='/apedido' element={<APedido />}/>
            <Route path='/anillos' element={<Anillos />}/>
            <Route path='/pulseras' element={<Pulseras />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
      </div>
  );
}

export default App;