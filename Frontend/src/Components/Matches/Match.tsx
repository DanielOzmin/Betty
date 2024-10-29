import Bet from "../Bet"
import { useState } from "react"
import './Match.css'
import { MatchProps } from "../Types/Types";


export default function Match({ matches }: MatchProps) {

    const [currentMatch, setCurrentMatch] = useState<number | null>(null)

    const handleBetClick = (id: number) => {
        setCurrentMatch(currentMatch === id ? null : id)
    }

    return (
        <>
            {matches.map((t) =>
                <div key={t.id}>
                    <div className="matches">
                        <>{t.away_team} - {t.home_team}</>
                        <button onClick={() => handleBetClick(t.id)}>Bet</button>
                    </div>
                    {currentMatch === t.id && <Bet match={t} />}
                </div>)}
        </>

    )
}