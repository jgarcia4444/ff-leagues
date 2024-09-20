import React from 'react';

import MatchupTeam from './MatchupTeam/MatchupTeam';

const Matchup = ({info}) => {

    const {team1, team2} = info;

    console.log("Info from Matchup component", info);

    const team1Winning = team1.points > team2.points ? true : false;

    return (
        <div className="rounded bg-slate-100 flex flex-row item-center justify-center p-6 text-slate-600 bg-opacity-50 w-48 h-28 flex-shrink-0">
            <MatchupTeam teamInfo={team1} />
            <div className="mx-4">
                <p className="text-2xl text-bold">Vs</p>
            </div>
            <MatchupTeam teamInfo={team2} />
        </div>
    )
}

export default Matchup;