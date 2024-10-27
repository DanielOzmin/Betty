import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Services/Auth"

export default function MyProfileScreen(){
    const { isLoggedIn } = useContext(AuthContext)
    if(!isLoggedIn){
        return <Navigate to="/"/>
    }
    return(
        <div>MyProfileScreeen</div>
    )
}