import React, { useEffect, useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../Hooks/useLogin";
import { AuthContext } from "../../Context/authContext";


function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const { mutate, isLoading, error, data } = useLogin();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {
      email: '',
      password: ''
    };

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'email is required';
    } else if (email.length >= 254) {
      newErrors.email = 'email must be 6-24 characters';
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'password is required';
    } else if (password.length <= 8 || password.length >= 64) {
      newErrors.password = 'password must be 6-24 characters';
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;


    mutate(
      { email, password }, 
      {
        onSuccess: (data) => {
          login(data);
          navigate('/');
        },
        onError: (err) => {
          console.error(err);
        }
      }
    );
    return;
  }
  
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>
        
        <label htmlFor="login-email-label">email
          <input 
            className={errors.email ? 'field-error' : ''}
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            type="email" 
            id="login-email-input"
            placeholder="email" />
            {errors.email && (
              <span className="auth-alert-msg">{errors.email}</span>
            )}
        </label>

        <label htmlFor="login-pasword-label">password
          
          <input 
            className={errors.password ? 'field-error' : ''}
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            id="login-password-input"
            placeholder="password" />

            {errors.password && (
              <span className="auth-alert-msg">{errors.password}</span>
            )}
        </label>
        
        <button onClick={handleLogin} type="submit" className="login-btn">{isLoading ? 'Logging in' : 'login'}</button>
        
        <Link to={"/register"}>
          <span className="login-form-login-link">
            don't have an account? Register
          </span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
