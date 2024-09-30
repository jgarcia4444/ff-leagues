import React from 'react';

import MatchupTeam from './MatchupTeam/MatchupTeam';

const Matchup = ({info}) => {

    const {team1, team2} = info;

    const checkWinning = () => {
        
    }

    return (
        <div className="rounded bg-slate-100 flex flex-row item-center justify-evenly text-slate-600 bg-opacity-50 w-80 h-40 mb-6">
            <MatchupTeam teamInfo={team1} winning={team1.points > team2.points} />
            <MatchupTeam teamInfo={team2} winning={team2.points > team1.points} />
        </div>
    )
}

export default Matchup;