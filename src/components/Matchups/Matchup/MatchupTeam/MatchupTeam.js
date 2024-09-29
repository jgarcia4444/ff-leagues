
import React from 'react';

import Urls from '../../../../config/Urls';

const MatchupTeam = ({teamInfo}) => {

    const {avatarUrl} = Urls;


    const {points, roster_id, settings, avatar_id, teamName, displayName} = teamInfo;

    const {wins, losses} = settings;

    return (
        <div className="flex flex-col w-1/3 items-center justify-center">
            <img src={`${avatarUrl}${avatar_id}`} alt="" className="w-20 h-20 rounded-full" />
            <div className="w-full">
                <p className="text-sm text-left">{teamName === undefined ? displayName : teamName} </p>
            </div>
            <div className="w-full">
                <p className="text-xs text-left">{wins}-{losses}</p>
            </div>
            {points}
        </div>
    )
}

export default MatchupTeam;