"use client"
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [userId, setUserId] = useState<Number | undefined>(undefined)

    return (
        <UserContext value={userId}>
            {children}
        </UserContext>
    );
}

export function useUserContext(){
    return useContext(UserContext);
}