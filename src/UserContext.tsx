import React, {createContext} from 'react'

interface UserContextType {
    name: string
    message: string
}

export const UserContext = createContext<UserContextType | undefined>(undefined)