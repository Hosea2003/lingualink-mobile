import { View, Text } from 'react-native'
import React, {createContext, useContext, useState} from 'react'
import * as SecureStore from 'expo-secure-store'
import { Token } from '../types/types'


type AuthProps={
    token:Token|Promise<Token|null>|null
    saveToken:(new_token:Token)=>void
}

const AuthContext = createContext<AuthProps>({
    token:null,
    saveToken:(value:Token)=>{}
})

const AuthProvider = ({children}:any) => {

    const [token, setToken]=useState<Token|Promise<Token|null>|null>(async ()=>{
        const token =await SecureStore.getItemAsync("token")
        if(token){
            return JSON.parse(token) as Token
        }
        return null
    })

    const saveToken=(new_token:Token)=>{
        SecureStore.setItemAsync("token", JSON.stringify(new_token))
        setToken(new_token)
    }

  return (
    <AuthContext.Provider value={{
        token,
        saveToken
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuth(){
    return useContext(AuthContext)
}