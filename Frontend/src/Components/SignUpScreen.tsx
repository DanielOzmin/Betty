import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Services/Auth"
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function SignUpScreen(){
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext)
    if(isLoggedIn){
        return <Navigate to="/"/>
    }
    
    const handleSignUp=()=>{
        navigate("/login");
    }
    return(
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username"/>
            <label htmlFor="password" >Password:</label>
            <input type="password" id="password" placeholder="Password"/>
            <label htmlFor="password" >Password again:</label>
            <input type="password" id="password" placeholder="Password"/>
            <label htmlFor="email" >email:</label>
            <input type="email" id="email" placeholder="email@example.com"/>
            <button onClick={handleSignUp}>Sing Up</button>
        </form>
    )
}

