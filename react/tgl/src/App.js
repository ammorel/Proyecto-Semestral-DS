// import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBarTGL } from './components/NavBarTGL';
import NavBarTGL from './components/NavBarTGL';
import CarouselTGL from './components/CarouselTGL';
// import { CarouselTGL } from './components/CarouselTGL';

function App() {
  return (
    <div className="App">
      <NavBarTGL />
      <CarouselTGL />
    </div>
  );
}

// export const App = () => {
//   return (
//     <div>
//       <NavBarTGL/>
//       <CarouselTGL/>
//     </div>
//   )
// }

export default App;
