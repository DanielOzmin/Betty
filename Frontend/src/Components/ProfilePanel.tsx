import { useContext } from "react"
import { ProfilePanelContext } from "../Services/ProfilePanel"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../ComponentsCss/ProfilePanel.css'


export default function ProfilePanel() {
    const { isProfilePanelOpen, onClose } = useContext(ProfilePanelContext)
    const navigate = useNavigate()
    const profileManager = () => {
        navigate("/myprofile")
    }
    return (
        <div className={`profile-panel ${isProfilePanelOpen ? "open" : ""}`} id="myprofile_panel">
            <h1>MyProfilePanel</h1>
            <p>Description...</p>
            <div>
            <button onClick={onClose}>Close</button>
            <button onClick={profileManager}>Profile manager</button>
            </div>
        </div>
    )

}