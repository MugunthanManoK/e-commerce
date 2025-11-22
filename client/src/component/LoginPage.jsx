import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", formData);

    alert("Login successful!");

  };

  return (
    <div>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange} required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange} required
          />

          <p>
            <input type="checkbox" /> Remember me
          </p>

          <Link to="/forget">Forgot password?</Link>

          <button type="submit">Login</button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
