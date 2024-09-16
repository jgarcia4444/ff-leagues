import React from 'react';

const MatchupTeam = ({teamInfo}) => {

    console.log(teamInfo);

    const {points, roster_id} = teamInfo;

    return (
        <div className="flex flex-col">
            {points}
        </div>
    )
}

export default MatchupTeam;