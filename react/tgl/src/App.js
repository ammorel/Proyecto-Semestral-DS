// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTGL from './components/NavBarTGL';
import CarouselTGL from './components/CarouselTGL';
import ColRows from './components/ColumnsRows';

function App() {
  return (
    <div className="App">
      <NavBarTGL />
      <CarouselTGL />
      <ColRows />
    </div>
  );
}

export default App;
