
import React from 'react';

import Urls from '../../../../config/Urls';

const MatchupTeam = ({teamInfo}) => {

    const {avatarUrl} = Urls;

    console.log(teamInfo);

    const {points, roster_id, settings, avatar_id, teamName, displayName} = teamInfo;

    return (
        <div className="flex flex-col">
            <img src={`${avatarUrl}${avatar_id}`} alt="" className="w-24 h-24 rounded-full" />
            <p className="">{teamName === undefined ? displayName : teamName}</p>
            {points}
        </div>
    )
}

export default MatchupTeam;