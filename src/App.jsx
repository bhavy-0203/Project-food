import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import NavBar from './components/NavBar'; // Import the Navbar
import Home from './pages/Home'; // Import the Home component
import Cart from './pages/Cart'; // Import the Cart component

function App() {
  return (
    <div>
      <NavBar />  {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route for Home */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
