'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface UserCotextType {
    user: User | null; 
    setUser: (user: User | null) => void; 
}

interface User{
    email: string; 
    name: string; 
}

const UserContext = createContext<UserCotextType | undefined>(undefined);

export function UserProvider({ children }: {children: ReactNode})  {
    
}