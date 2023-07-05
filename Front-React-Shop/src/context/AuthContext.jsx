import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth';

export const AuthContext = createContext()

export const useAuth = () => {
   const context =  useContext(AuthContext);
   if(!context){
    throw new Error("UserAuth mus be used within an AuthProvider")
   }
   return context
}

export const AuthProvider = ({children}) => {
    const [user, SetUser] = useState(null)
    

    const signup = async (user) => {
        const res = await registerRequest(user)
        console.log("AUTH PROVIDERR",res.data)
        SetUser(res.data)
    }

    return ( 
        <AuthContext.Provider
        value={{
            signup,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}