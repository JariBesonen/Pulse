import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../../../backend/Models/authModel"

export const useRegister = () => {
   return useMutation ({
      mutationFn: registerUser
   });
};