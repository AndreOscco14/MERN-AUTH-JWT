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
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log("AUTH PROVIDERR",res.data)
            SetUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <AuthContext.Provider
        value={{
            signup,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}