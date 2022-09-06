// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarTGL } from './components/NavBarTGL';
import { CarouselTGL } from './components/CarouselTGL';

export const App = () => {
  return (
    <div>
      <NavBarTGL/>
      <CarouselTGL/>
    </div>
  )
}

export default App;
