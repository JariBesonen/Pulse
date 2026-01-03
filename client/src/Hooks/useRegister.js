import { useMutation } from "@tanstack/react-query"
import { register } from "../Api/authApi";
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export const useRegister = () => {
   const { login } = useContext(AuthContext);
   
   return useMutation ({
      mutationFn: register,
      onSuccess: (data) => {
         login(data);
      },
      onError: (err) => {
         console.error(err);
      }
   });
};