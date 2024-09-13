import React from 'react';

import Matchup from './Matchup/Matchup';

const LeagueMatchups = ({matchups}) => {

    console.log(matchups);

    const renderMatchups = () => {
        return matchups.map((matchup, i) => <Matchup info={matchup} key={`${i}-${matchup.roster_id}`} />)
    }

    return (
        <div className="flex flex-row ">
            {renderMatchups()}
        </div>
    )
}

export default LeagueMatchups;