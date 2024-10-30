import Bet from "../Bet"
import { useState } from "react"
import './Match.css'
import { MatchProps } from "../Types/Types";


export default function Match({ matches }: MatchProps) {

    const [currentMatch, setCurrentMatch] = useState<number | null>(null)

    const handleBetClick = (id: number) => {
        setCurrentMatch(currentMatch === id ? null : id)
    }


    const groupedMatches = matches.reduce((group: any, match: any) => {
        (group[match["date"]] = group[match["date"]] || []).push(match)
        return group
    }, {})



    return (
        <>
            {Object.entries(groupedMatches).map(([date, matches]: [string, any]) => (
                <div key={date}>
                    <h3>{date}</h3>
                    {matches.map((t: any) => (
                        <div key={t.id} className="matches">
                            <div>
                                {t.away_team} - {t.home_team}
                                <button onClick={() => handleBetClick(t.id)}>Bet</button>
                            </div>
                            {currentMatch === t.id && <Bet match={t} />}
                        </div>
                    ))}
                </div>
            ))}
        </>

    )
}