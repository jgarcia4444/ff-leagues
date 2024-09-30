
import React from 'react';
import { AiFillCaretUp } from "react-icons/ai";

import Urls from '../../../../config/Urls';

const MatchupTeam = ({teamInfo, winning}) => {

    const {avatarUrl} = Urls;

    const {points, roster_id, settings, avatar_id, teamName, displayName} = teamInfo;

    const {wins, losses} = settings;

    return (
        <div className={`flex flex-col w-36 items-center justify-center relative`}>
            <div className="absolute left-2 top-2">
                <AiFillCaretUp className={`${winning === true ? "text-green-700" : "text-red-700 rotate-180"}`} size={20}/>
            </div>
            <img src={`${avatarUrl}${avatar_id}`} alt="" className="w-20 h-20 rounded-full" />
            <div className="w-full text-left ">
                <p className="text-sm  font-bold text-left">{teamName === undefined ? displayName : teamName} </p>
            </div>
            <div className="w-full">
                <p className="text-xs text-left">{wins}-{losses}</p>
            </div>
            {points}
        </div> 
    )
}

export default MatchupTeam;