import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useRegister } from "../../Hooks/useRegister";

function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isLoading, error, data } = useRegister();

  const handleSubmit = (e) => {
    if (!username || !email || !password) return;

    e.preventDefault();

    mutate({ username, email, password });
  }

  useEffect(() => {
    if (error) return;
    
    setUsername('');
    setEmail('');
    setPassword('');
    
  }, [error]);

  
  return (
    <div className="register-page">
      <form className="register-form">
        <h2>Register</h2>
        
        <label htmlFor="register-username-label">username
          <input 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            type="text" 
            id="register-username-input" />
        </label>
        
        <label htmlFor="register-pasword-label">email
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            id="register-email-input" />
        </label>

        <label htmlFor="register-pasword-label">password
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            id="register-password-input" />
        </label>
        
        <button onClick={handleSubmit} className="register-btn">{isLoading ? 'registering' : 'register'}</button>
        
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
