import React from 'react';

import Urls from '../../config/Urls';
const {avatarUrl} = Urls;

const AwardsCard = ({user, awardType="", extraValue=0}) => {

    const userMetadata = user.metadata;

    const configuredAvatar =  userMetadata.avatar === undefined ? `${avatarUrl}${user.avatar}` : userMetadata.avatar; 

    const teamName = userMetadata.team_name !== undefined ? userMetadata.team_name : user.display_name; 

    const awardsCardContainer = "w-full flex flex-col relative";

    const valueDisplayed = () => {
        switch(awardType) {
            case "MOST_POINTS_FOR":
                return extraValue;
            case "LONGEST_WIN_STREAK":
                return extraValue;
            case "HIGHEST_SCORING_WEEK":
                return extraValue;
            case "TOP_SEED":
                return "";
            default:
                return "";
        }
    }

    return (
        <div className={awardsCardContainer}>
            <img className="w-full rounded" src={configuredAvatar} alt="user avatar" />
            <div className="absolute w-full h-1/3 flex flex-row items-end justify-between bottom-0 left-0 bg-gradient-to-t from-white rounded p-2">
                    <h5 className="text-slate-700 font-bold text-xl">{teamName}</h5>
                    <p className="text-slate-700 font-bold text-xl">{valueDisplayed()}</p>
                </div>
        </div>
    )
}

export default AwardsCard;