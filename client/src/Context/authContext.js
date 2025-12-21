import { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   
   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
   const [user, setUser] = useState(!!localStorage.getItem('user'));

   function login(userData) {
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData.user));

      setIsLoggedIn(true);
      setUser(userData.user);
   };

   function logout() {
      setIsLoggedIn(false);
      setUser(null);

      localStorage.removeItem('user');
      localStorage.removeItem('token');
   };

   return (
      <AuthContext.Provider value={{ 
         isLoggedIn, 
         user, 
         login,
         logout,
      }}>
         { children }
      </AuthContext.Provider>
   )
}