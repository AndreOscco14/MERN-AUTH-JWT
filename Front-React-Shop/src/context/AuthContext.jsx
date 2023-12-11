import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest , loginRequest, verifyTokenRequest} from '../api/auth';

import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
   const context =  useContext(AuthContext);
   if(!context){
    throw new Error("UserAuth must be used within an AuthProvider")
   }
   return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            // console.log("AUTH PROVIDERR",res)
            if(res.status === 200) {
                setUser(res.data)
                setIsAuthenticated(true)
            }
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

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false)
        setUser(null)
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
        console.log("COOKIES", cookies);
            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null)
            }
            try {
               const res =  await verifyTokenRequest(cookies.token);
               console.log("RES", res);
               
               if(!res.data){
                  setIsAuthenticated(false)
                  setLoading(false)
                  return
                }

               setIsAuthenticated(true)
               setUser(res.data)
               setLoading(false)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
     }
     checkLogin()
    }, [])

    return ( 
        <AuthContext.Provider
        value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}