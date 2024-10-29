import { AuthContext } from "../Services/Auth"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { UserContext } from "../Services/User"

type Odds ={
    home_win: number,
    draw: number,
    away_win: number
}
type Score ={
    home: number | null,
    away: number | null
}

type Match={
    id: number,
    home_team: string,
    away_team: string,
    date: string,
    time: string,
    status: string,
    score: Score,
    odds: Odds
}
type MatchProps = {
    match: Match
}



export default function Bet({match}: MatchProps){
    const { isLoggedIn } = useContext(AuthContext)
    const userContext = useContext(UserContext)
    const [isClicked, setIsClicked] = useState(false)
    const [makeBet, setMakeBet] = useState<String>("")
    const [odds, setOdds] = useState(0)
    
    const handleOddsClick=(amount: number)=>{
        setOdds(amount)
        setIsClicked(true)
    }

    const handleBetClick=()=>{
        const bet = Number(makeBet)
        if(bet === 0)return alert("Give amount for bet")
       if(user.balance-bet >=0){
        setUser({...user, 
            balance: user.balance-bet,
            playedMatches: [...user.playedMatches, 
                {id: match.id, betAmount: bet,possibleWinAmount:bet*odds } ]
        })
       }
       setIsClicked(false)
       
    }
    if(!userContext){
        return <>Loading..</>
    }
    const { user, setUser } = userContext


    return(
        <div>
        {isLoggedIn?(
            <div>
                <button onClick={()=>handleOddsClick(match.odds.away_win)}>Win {match.odds.away_win}</button>
                <button onClick={()=>handleOddsClick(match.odds.draw)}>Draw {match.odds.draw}</button>
                <button onClick={()=>handleOddsClick(match.odds.home_win)}>Lose {match.odds.home_win}</button>
                {isClicked? 
                <div>Give amount:
                    <input 
                    type="number" 
                    onChange={(e)=> setMakeBet(e.target.value)}
                    />
                    <button onClick={handleBetClick}>Bet</button>
                </div>:("")}
            </div>
        ):(<div>Log in first!</div>)}
        </div>
    )
}