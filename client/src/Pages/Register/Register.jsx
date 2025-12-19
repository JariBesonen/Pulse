import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../Hooks/useRegister";


function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { mutate, isLoading, error, data } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: '',
      email: '',
      password: ''
    }

    if (!username) {
      newErrors.username = 'Username is required';
    } else if (username.length <= 6 || username.length >= 24) {
      newErrors.username = 'username must be 6-24 characters';
    };

    if (!email) {
      newErrors.email = 'email is required';
    } else if (email.length <= 6 || email.length >= 24) {
      newErrors.email = 'email must be 6-24 characters';
    };

    if (!password) {
      newErrors.password = 'password is required';
    } else if (password.length <= 6 || password.length >= 24) {
      newErrors.password = 'password must be 6-24 characters';
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;


    mutate(
      { username, email, password }, 
      {
        onSuccess: () => navigate('/')
      }
    );
    return;
  }
  
  return (
    <div className="register-page">
      <form className="register-form">
        <h2>Register</h2>
        
        <label htmlFor="register-username-label">username
          <input 
            className={errors.username ? 'field-error' : ''}
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            type="text" 
            id="register-username-input" 
            placeholder="username"/>

            {errors.username && (
              <span className="auth-alert-msg">{errors.username}</span>
            )}
        </label>
        
        <label htmlFor="register-email-label">email
          <input 
            className={errors.email ? 'field-error' : ''}
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            type="email" 
            id="register-email-input"
            placeholder="email" />
            {errors.email && (
              <span className="auth-alert-msg">{errors.email}</span>
            )}
        </label>

        <label htmlFor="register-pasword-label">password
          
          <input 
            className={errors.password ? 'field-error' : ''}
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            id="register-password-input"
            placeholder="password" />

            {errors.password && (
              <span className="auth-alert-msg">{errors.password}</span>
            )}
        </label>
        
        <button onClick={handleSubmit} type="submit" className="register-btn">{isLoading ? 'registering' : 'register'}</button>
        
        <Link to={"/login"}>
          <span className="register-form-login-link">
            already have an account? login
          </span>
        </Link>
      </form>
    </div>
  );
}

export default Register;
