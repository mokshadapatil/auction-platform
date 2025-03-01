import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up:', { name, email, password });
    navigate('/signin'); // Redirect to SignIn after signup
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px' }}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px' }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '18px' }}>Register</button>
      </form>
    </div>
  );
}

export default SignUp;
