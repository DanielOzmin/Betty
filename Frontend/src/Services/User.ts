import { createContext, Dispatch, SetStateAction } from 'react';

export type User = {
    id: number,
    userName: String,
    balance: number
    playedMatches: {id: number, betAmount: number,possibleWinAmount: number}[]
}

type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext(<UserContextType | null>null)
