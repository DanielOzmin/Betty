import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Services/Auth"

export default function MyProfileScreen(){
    const { isLoggedIn } = useContext(AuthContext)
    if(!isLoggedIn){
        return <Navigate to="/"/>
    }
    //itt lesz az összes fogadás amit eddig kötöttél, akár lejárt akár nem
    //statisztika, milyen arányban van befektetett pénzed és a nyereséged/veszteséged
    //szerkeztési lehetőség profil adatok stb, opcionálisan kép. 
    return(
        <div>MyProfileScreeen</div>
    )
}