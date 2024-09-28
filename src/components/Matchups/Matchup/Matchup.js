import React from 'react';

import MatchupTeam from './MatchupTeam/MatchupTeam';

const Matchup = ({info}) => {

    const {team1, team2} = info;

    const team1Winning = team1.points > team2.points ? true : false;

    return (
        <div className="rounded bg-slate-100 flex flex-row item-center justify-center p-6 text-slate-600 bg-opacity-50 w-72 h-40 mb-6">
            <MatchupTeam teamInfo={team1} />
            <div className="mx-4">
                <p className="text-2xl text-bold">Vs</p>
            </div>
            <MatchupTeam teamInfo={team2} />
        </div>
    )
}

export default Matchup;