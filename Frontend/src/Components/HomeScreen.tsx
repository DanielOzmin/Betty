import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Services/Auth";
import { ProfilePanelContext } from "../Services/ProfilePanel";
import ProfilePanel from "./ProfilePanel";
import '../ComponentsCss/HomeScreen.css';

const Home = () =>{
    const navigate = useNavigate();
    const { isLoggedIn,logOut } = useContext(AuthContext)
    const { isProfilePanelOpen, doOpen, onClose } = useContext(ProfilePanelContext)
    
    const signUpButton=()=>{
        navigate("/signup")
    }
    
    const logInButton=()=>{
        navigate("/login")
    }
    const logOutButton=()=>{
        onClose()
        logOut()
    }
    
    const myProfileButton=()=>{
        if(isProfilePanelOpen){
            onClose()
        }else{
            doOpen()
        }
    
    }
 
    return(
        <>
        <div className="navbar">
            <h1>Betty</h1>
            <div className="navbar-buttons">
                {isLoggedIn ? (
                <div>
                    <button onClick={logOutButton}>LogOut</button>
                    <button onClick={myProfileButton}>My Profile</button>
                </div>):(
                    <div>
                    <button onClick={logInButton}>Log In</button>
                    <button onClick={signUpButton}>Sign Up</button>
                    </div>)} 
            </div>
        </div>

        <div className="content">
            <h1>Welcome on Betty</h1>
        </div>

        <ProfilePanel/>
    </>
    )
}

export default Home;