import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate successful login (replace with actual login logic)
    // For demonstration, checking if email and password are non-empty
    if (formData.email && formData.password) {
      setLoggedIn(true);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Login
            </button>
          </div>
        </form>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Logged in successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
