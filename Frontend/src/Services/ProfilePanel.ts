import { createContext } from "react"

export const ProfilePanelContext=createContext({
    isProfilePanelOpen: false,
    doOpen: () => {},
    onClose: () => {},
})