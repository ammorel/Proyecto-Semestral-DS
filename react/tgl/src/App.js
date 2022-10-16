// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTGL from './components/NavBarTGL';
import CarouselTGL from './components/CarouselTGL';
import ColRows from './components/ColumnsRows';
import Cart from './components/Cart';
import Nosotros from './components/Nosotros';
import APedido from './components/APedido';
import Anillos from './components/Anillos';
import Pulseras from './components/Pulseras';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import { CarritoProvider } from './components/Carrito.tsx';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AW3NwNUKH01AfY20t6Xgfde1RDryvi5cOFhQtP1cBM77jsqx2l5XsUc3WtePJlYJFoZjyn0e_SlrCGnS" }}>
      <div className="App">
        <CarritoProvider>
          <NavBarTGL />
            <Routes>
              <Route path='/' element={<><CarouselTGL /><ColRows /></>}/>
              <Route path='/nosotros' element={<Nosotros />}/>
              <Route path='/apedido' element={<APedido />}/>
              <Route path='/anillos' element={<Anillos />}/>
              <Route path='/pulseras' element={<Pulseras />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          <Footer />
        </CarritoProvider>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
