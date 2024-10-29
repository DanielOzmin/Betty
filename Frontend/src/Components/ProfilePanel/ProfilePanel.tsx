import { useContext } from "react"
import { ProfilePanelContext } from "../../Services/ProfilePanel"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './ProfilePanel.css'
import { UserContext } from "../../Services/User"
import { MatchProps } from "../Types/Types";

export default function ProfilePanel({ matches }: MatchProps) {
    const { isProfilePanelOpen, onClose } = useContext(ProfilePanelContext)
    const userContext = useContext(UserContext)
    const navigate = useNavigate()
    const profileManager = () => {
        navigate("/myprofile")
    }
    if (!userContext) {
        return <>Err</>
    }
    const { user } = userContext

    const searchById = (id: number) => {
        const result = matches.find(m => m.id === id)
        return result
    }
    return (
        <div className={`profile-panel ${isProfilePanelOpen ? "open" : ""}`} id="myprofile_panel">
            <h1>MyProfilePanel</h1>
            {user.playedMatches.map((m) =>
                <div>
                    <div>Match: {searchById(m.id)?.away_team}-{searchById(m.id)?.home_team}
                        <div>When: {searchById(m.id)?.date}</div>
                        <div>Bet Amount: {m.betAmount}</div>
                        <div>Winning: {m.possibleWinAmount} </div>
                    </div>
                </div>)}
            <p>Description...</p>
            <div>
                <button onClick={onClose}>Close</button>
                <button onClick={profileManager}>Profile manager</button>
            </div>
        </div>
    )

}