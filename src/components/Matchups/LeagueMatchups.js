import React from 'react';

import Matchup from './Matchup/Matchup';

const LeagueMatchups = ({matchups}) => {

    const filterMathchups = () => {
        const upperLimit = (matchups.length / 2) + 1;
        const filteredMatchups = [];
        let i = 1;
        while (i < upperLimit) {
            let matchingMatchIds = matchups.filter(matchup => matchup.matchup_id === i);
            let matchupInfo = {
                team1: matchingMatchIds[0],
                team2: matchingMatchIds[1]
            }
            filteredMatchups.push(matchupInfo);
            i += 1;
        }
        console.log(filteredMatchups);
        return filteredMatchups;
    }

    const renderMatchups = () => {
        const filteredMatchups = filterMathchups();
        return filteredMatchups.map((matchup, i) => <Matchup info={matchup} key={`${i}-${matchup.team1.matchup_id}`} />)
    }

    return (
        <div className="w-full mt-8 overflow-x-auto flex flex-row gap-12 py-4">
            {renderMatchups()}
        </div>
    )
}

export default LeagueMatchups;