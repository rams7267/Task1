import React from 'react';
import './App.css';
import LeftComponent from './Components/LeftComponent'
import RightComponent from './Components/RightComponent'
import Navbar from './Components/NavBar';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = 'disp'>
        <LeftComponent />
        <RightComponent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
