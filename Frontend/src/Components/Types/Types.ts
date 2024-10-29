export type Odds = {
    home_win: number,
    draw: number,
    away_win: number
}
export type Score = {
    home: number | null,
    away: number | null
}

export type Match = {
    id: number,
    home_team: string,
    away_team: string,
    date: string,
    time: string,
    status: string,
    score: Score,
    odds: Odds
}

export type MatchProps = {
    matches: Match[]
}