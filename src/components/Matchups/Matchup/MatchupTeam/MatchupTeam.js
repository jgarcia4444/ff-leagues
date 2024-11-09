
import React from 'react';
import { AiFillCaretUp, AiOutlineMinus } from "react-icons/ai";

import Urls from '../../../../config/Urls';

const MatchupTeam = ({teamInfo, winning}) => {

    const {avatarUrl} = Urls;

    const {points, settings, display_name, metadata, standing} = teamInfo;

    const {streak, team_name} = metadata;

    const avatar = metadata.avatar === undefined ? teamInfo.avatar : metadata.avatar;

    const {wins, losses} = settings;

    const configureAvatar = () => {
        if (metadata.avatar === undefined) {
            return avatarUrl + avatar;
        } else {
            return avatar;
        }
    }

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
        var streakClass = "text-xs font-bold "
        if (streak.split("").includes("L")) {
            streakClass += "text-red-700";
        } else {
            streakClass += "text-green-700";
        }
        return (
            <p className={streakClass}>{streak}</p>
        )
    }
    
    const detailRowClass = "flex flex-col items-start justify-center";

    const detailLabelClass = "text-xs font-thin";

    const detailValueClass = "text-xs font-bold";

    const configuredStanding = () => {
        var suffix;
        if (standing === 1) {
            suffix = 'st';
        }
        else if (standing === 2) {
            suffix = 'nd';
        }
        else if (standing === 3) {
            suffix = 'rd';
        }
        else {
            suffix = 'th';
        }
        return (
            <p className={detailValueClass}>{standing}<sup>{suffix}</sup></p>
        )
    }

    return (
        <div className={`flex flex-col w-48 md:w-40 items-center justify-center relative bg-slate-100 bg-opacity-50 rounded px-2`}>
            <div className="absolute left-2 top-2">
                {winningIndicator()}
            </div>
            <img src={configureAvatar()} alt="" className="w-20 h-20 rounded" />
            <div className="w-full text-left ">
                <p className="text-sm  font-bold text-left text-nowrap">{team_name === undefined ? display_name : team_name} </p>
            </div>
            <div className="w-full flex-row flex items-start justify-between">
                <div className={detailRowClass}>
                    <small className={detailLabelClass}>Record</small>
                    <p className={detailValueClass}>{wins}-{losses}</p>
                </div>
                <div className={detailRowClass}>
                    <small className={detailLabelClass}>Strk</small>
                    {configureStreak()}
                </div>
                <div className={detailRowClass}>
                    <small className={detailLabelClass}>Pos</small>
                    {configuredStanding()}
                </div>
            </div>
            <p className="font-bold ">{points}</p>
        </div> 
    )
}

export default MatchupTeam;