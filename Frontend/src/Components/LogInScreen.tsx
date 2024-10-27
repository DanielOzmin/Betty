import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Services/Auth";
import { useContext } from "react";

const LogIn = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logIn } = useContext(AuthContext)

    const handleClickSignUp = () => {
        navigate("/signup")
    }
    const handleLogIn = () => {
        logIn()
        navigate("/")
    }

    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username" />
            <label htmlFor="password" >Password:</label>
            <input type="password" id="password" placeholder="Password" />
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleClickSignUp}>Sign Up</button>
        </form>
    )
}

export default LogIn;