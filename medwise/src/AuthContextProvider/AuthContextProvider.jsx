import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();
function AuthContextProvider({children}) {

  const [auth, setAuth] = useState(false)
  
  const login=()=>{
    setAuth(true)
  }

  const logout=()=>{
    setAuth(false)
  }
  return (
    <AuthContext.Provider value={{auth, login, logout}}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider