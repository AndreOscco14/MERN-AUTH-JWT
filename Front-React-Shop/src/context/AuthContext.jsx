import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest , loginRequest, verifyTokenRequest} from '../api/auth';

import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
   const context =  useContext(AuthContext);
   if(!context){
    throw new Error("UserAuth mus be used within an AuthProvider")
   }
   return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log("AUTH PROVIDERR",res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            // console.log(error);
            setErrors(error.response.data)
        }
    }

    const signin = async (user ) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    useEffect(() => {
        if(errors.length > 0) {
        const timer = setTimeout(() => {
                setErrors([])
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [errors])


    useEffect(() => {
    async function checkLogin() {
        const cookies = Cookies.get()
        if(!cookies.token){
            setIsAuthenticated(false);
            return setUser(null)
        }
            try {
               const res =  await verifyTokenRequest(cookies.token);
               if(!res.data){
               return setIsAuthenticated(false)
               }
               setIsAuthenticated(true)
               setUser(res.data)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
            }
        // 
     }
     checkLogin()
    }, [])

    return ( 
        <AuthContext.Provider
        value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}