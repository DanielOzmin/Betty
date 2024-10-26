import { useNavigate } from "react-router-dom"

const Register =()=>{
    const navigate = useNavigate();
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

export default Register;