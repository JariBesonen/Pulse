import { useMutation } from "@tanstack/react-query"
import { login } from "../Api/authApi";

export const useLogin = () => {
   return useMutation ({
      mutationFn: login
   });
};