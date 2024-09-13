import React from 'react';

import Matchup from './Matchup/Matchup';

const LeagueMatchups = ({matchups}) => {

    console.log(matchups);

    const filterMathchups = () => {
        const upperLimit = (matchups / 2) + 1;
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
        return filteredMatchups;
    }

    const renderMatchups = () => {
        const filteredMatchups = filterMathchups();
        return filteredMatchups.map((matchup, i) => <Matchup info={matchup} key={`${i}-${matchup.team1.matchup_id}`} />)
    }

    return (
        <div className="flex flex-row ">
            {renderMatchups()}
        </div>
    )
}

export default LeagueMatchups;