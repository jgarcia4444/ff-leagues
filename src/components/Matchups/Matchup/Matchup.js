import React from 'react';

import MatchupTeam from './MatchupTeam/MatchupTeam';

const Matchup = ({info}) => {

    const {team1, team2} = info;

    const checkWinning = (mainTeam, secondaryTeam) => {
        if (mainTeam.points > secondaryTeam.points) {
            return true;
        } else if (mainTeam.points < secondaryTeam.points) {
            return false;
        } else {
            return undefined;
        }
    }

    return (
        <div className="rounded bg-slate-100 flex flex-row gap-2 item-center justify-evenly text-slate-600 bg-opacity-0 h-44 py-2 mb-6">
            <MatchupTeam teamInfo={team1} winning={checkWinning(team1, team2)} />
            <MatchupTeam teamInfo={team2} winning={checkWinning(team2, team1)} />
        </div>
    )
}

export default Matchup;