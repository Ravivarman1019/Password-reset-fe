import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://password-reset-backend.onrender.com/forget-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgetPassword;
