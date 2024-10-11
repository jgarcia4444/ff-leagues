
import React from 'react';
import { AiFillCaretUp, AiOutlineMinus } from "react-icons/ai";

import Urls from '../../../../config/Urls';

const MatchupTeam = ({teamInfo, winning}) => {

    const {avatarUrl} = Urls;

    const {points, roster_id, settings, avatar, teamName, display_name, metadata} = teamInfo;

    const {streak} = metadata;

    const {wins, losses} = settings;

    const winningIndicator = () => {
        var indicator;
        const iconSize = 20;
        const winningClass = 'text-green-700';
        const losingClass = 'text-red-700 rotate-180';
        const tiedClass = 'text-slate-900'
        if (winning === true) {
            indicator = <AiFillCaretUp size={iconSize} className={winningClass} />
        } else if (winning === undefined) {
            indicator = <AiOutlineMinus size={iconSize} className={tiedClass} />
        } else {
            indicator = <AiFillCaretUp size={20} className={losingClass} />
        }
        return indicator;
    }

    const configureStreak = () => {
        
    }

    return (
        <div className={`flex flex-col w-40 items-center justify-center relative bg-slate-100 bg-opacity-50 rounded px-2`}>
            <div className="absolute left-2 top-2">
                {winningIndicator()}
            </div>
            <img src={`${avatarUrl}${avatar}`} alt="" className="w-20 h-20 rounded" />
            <div className="w-full text-left ">
                <p className="text-sm  font-bold text-left text-nowrap">{teamName === undefined ? display_name : teamName} </p>
            </div>
            <div className="w-full flex-row flex">
                <div className="flex flex-col items-start justify-center">
                    {configureStreak()}
                    <p className="text-xs text-left">{wins}-{losses}</p>
                </div>
                <div className=""></div>
            </div>
            {points}
        </div> 
    )
}

export default MatchupTeam;