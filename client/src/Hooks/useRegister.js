import { useMutation } from "@tanstack/react-query"
import { register } from "../Api/authApi";

export const useRegister = () => {
   return useMutation ({
      mutationFn: register
   });
};