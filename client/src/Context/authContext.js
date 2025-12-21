import { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   
   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
   // const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [user, setUser] = useState(!!localStorage.getItem('user'));

   function logout() {
      setIsLoggedIn(false);
      setUser(null);

      localStorage.removeItem('user');
      localStorage.removeItem('token');
   };

   return (
      <AuthContext.Provider value={{ isLoggedIn, user, logout }}>
         { children }
      </AuthContext.Provider>
   )
}