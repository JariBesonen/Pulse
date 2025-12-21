import { useState, createContext, useContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {

   return (
      <authContext.Provider value={{  }}>
         { children }
      </authContext.Provider>
   )
}