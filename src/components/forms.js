import React, { useState, useRef } from 'react';

export default function Forms() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const displayRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.confirmPassword) {
      if (formData.password === formData.confirmPassword) {
        displayRef.current.innerHTML = `Email: ${formData.email}<br>Password: ${formData.password}`;
      } else {
        alert('Password and Confirm Password do not match.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleLogin = () => {
    const simulatedLogin = true;

    if (simulatedLogin) {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="logform">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label className="formlabel" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="logi1"
              type="text"
              name="txt"
              placeholder="User name"
              required
            />
            <input
              className="logi1"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              className="logi1"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
              value={formData.password}
            />
            <input
              className="logi1"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={handleInputChange}
              value={formData.confirmPassword}
            />
            <button className="logbtn" onClick={handleSignUp}>
              Sign up
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label className="formlabel" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="logi1"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              className="logi1"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
              value={formData.password}
            />
            <button className="logbtn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div style={{color:'#ffffff',marginLeft:'50px'}} ref={displayRef}></div>
    </div>
  );
}
