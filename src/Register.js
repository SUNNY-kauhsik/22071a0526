import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration (replace with actual registration logic)
    // For demonstration, check if required fields are filled (e.g., email and password)
    if (formData.email && formData.password) {
      setRegistered(true);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '5px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h1>
      {!registered ? (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Address Line 1:
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Address Line 2:
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Zip Code:
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <label>
            Country:
            <input type="text" name="country" value={formData.country} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} />
          </label>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Register</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Registered successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Register;
