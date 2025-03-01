import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
      <h1>Welcome to Online Auction</h1>
      <p>Bid on exclusive items and win exciting deals!</p>
      <Link to="/signin">
        <button style={{ padding: '10px 20px', fontSize: '18px', margin: '10px' }}>Sign In</button>
      </Link>
      <Link to="/signup">
        <button style={{ padding: '10px 20px', fontSize: '18px', margin: '10px' }}>Sign Up</button>
      </Link>
    </div>
  );
}

export default LandingPage;
