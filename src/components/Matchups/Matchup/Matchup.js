import React from 'react';

import MatchupTeam from './MatchupTeam/MatchupTeam';

const Matchup = ({info}) => {

    const {team1, team2} = info;

    const team1Winning = team1.points > team2.points ? true : false;

    return (
        <div className="rounded bg-slate-100 flex flex-row item-center justify-evenly text-slate-600 bg-opacity-50 w-72 h-40 mb-6">
            <MatchupTeam teamInfo={team1} />
            <MatchupTeam teamInfo={team2} />
        </div>
    )
}

export default Matchup;