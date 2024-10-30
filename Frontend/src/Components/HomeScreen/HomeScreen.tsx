import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Services/Auth";
import { ProfilePanelContext } from "../../Services/ProfilePanel";
import ProfilePanel from "../ProfilePanel/ProfilePanel";
import { UserContext } from "../../Services/User";
import './HomeScreen.css';
import Match from "../Matches/Match";
import { Matches } from "../../MatchesData";

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