import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () =>{
    const navigate = useNavigate();
    const logInButton =()=>{
        navigate("/login")
    }
    const registerButton=()=>{
        navigate("/signup")
    }
 
    return(
        <>
        <div className="navbar">
            <h1>Betty</h1>
            <div className="navbar-buttons">
                <button onClick={logInButton}>Log In</button>
                <button onClick={registerButton}>Sign Up</button>
            </div>
        </div>

        <div className="content">
            <h1>Welcome on Betty</h1>
        </div>
    </>
    )
}

export default Home;