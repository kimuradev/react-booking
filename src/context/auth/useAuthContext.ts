import { useContext } from "react";

import { AuthContext } from "./auth";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
  
      if (!context) {
         throw new Error('useAuthContext must be used with AuthContext')
      }
  
    return context;
  };
  