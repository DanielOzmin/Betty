import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Services/Auth";
import { ProfilePanelContext } from "../../Services/ProfilePanel";
import ProfilePanel from "../ProfilePanel/ProfilePanel";
import { UserContext } from "../../Services/User";
import './HomeScreen.css';
import Match from "../Matches/Match";

const Matches = [
    {
        "id": 1,
        "home_team": "Manchester United",
        "away_team": "Chelsea",
        "date": "2024-11-01",
        "time": "15:00",
        "status": "upcoming",
        "score": { "home": null, "away": null },
        "odds": { "home_win": 1.5, "draw": 3.2, "away_win": 4.0 }
    },
    {
        "id": 2,
        "home_team": "Liverpool",
        "away_team": "Arsenal",
        "date": "2024-11-01",
        "time": "17:30",
        "status": "upcoming",
        "score": { "home": null, "away": null },
        "odds": { "home_win": 1.8, "draw": 3.0, "away_win": 3.8 }
    }]

const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logOut } = useContext(AuthContext)
    const { isProfilePanelOpen, doOpen, onClose } = useContext(ProfilePanelContext)
    const userContext = useContext(UserContext)

    if (!userContext) {
        return <div>Loading...</div>
    }

    const { user, setUser } = userContext


    const signUpButton = () => {
        navigate("/signup")
    }

    const logInButton = () => {
        navigate("/login")
    }

    const logOutButton = () => {
        setUser({ ...user, balance: 10000 }) // dont forget to delete it!!!
        onClose()
        logOut()
    }

    const myProfileButton = () => {
        if (isProfilePanelOpen) {
            onClose()
        } else {
            doOpen()
        }

    }

    return (
        <>
            <div className="navbar">
                <h1>Betty</h1>
                {isLoggedIn ? <div>Your balance: ${user.balance}</div> : ""}
                <div className="navbar-buttons">
                    {isLoggedIn ? (
                        <div>
                            <button onClick={logOutButton}>LogOut</button>
                            <button onClick={myProfileButton}>My Profile</button>
                        </div>) : (
                        <div>
                            <button onClick={logInButton}>Log In</button>
                            <button onClick={signUpButton}>Sign Up</button>
                        </div>)}
                </div>
            </div>

            <div className="content">
                {isLoggedIn ? <h1>Welcome {user.userName}! on Betty</h1> : <h1>Welcome! on Betty</h1>}
                <Match matches={Matches} />
            </div>

            <ProfilePanel matches={Matches} />
        </>
    )
}

export default Home;