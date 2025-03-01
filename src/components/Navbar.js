import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', margin: '10px' }}>Landing</Link>
      <Link to="/signin" style={{ color: 'white', margin: '10px' }}>Sign In</Link>
      <Link to="/signup" style={{ color: 'white', margin: '10px' }}>Sign Up</Link>
    </nav>
  );
}

export default Navbar;
