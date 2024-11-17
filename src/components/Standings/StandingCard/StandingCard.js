import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../config/Urls';
const {avatarUrl} = Urls;

const StandingCard = ({roster, users}) => {
    const {standing, owner_id, settings} = roster;
    const {wins, losses, fpts, fpts_against} = settings;
    const {streak} = roster.metadata;

    const getUser = userId => {
        return users.filter(user => user.user_id === userId)[0]
    }

    const user = getUser(owner_id);
    const {metadata, avatar, display_name} = user;

    const avatarImageUrl = () => {
        let imageUrl;
        if (metadata.avatar !== undefined) {
            imageUrl = metadata.avatar;
        } else {
            imageUrl = avatarUrl + avatar;
        }
        return imageUrl;
    }

    const teamName = () => {
        console.log("TEAM NAME: ", metadata.team_name);
        if (metadata.team_name !== undefined) {
            return metadata.team_name;
        } else {
            console.log("DISPLAY NAME", display_name);
            return display_name;
        }
    }

    const flexRowClass = "flex flex-row"
    const metricsLabelClass = "text-slate-400 font-thin";
    const metricsValueClass = "font-bold ml-2"

    const teamMacroMetrics = (
        <div className={`${flexRowClass} gap-4`}>
            <div className={`${flexRowClass}`}>
                <p className={metricsLabelClass}>Record</p>
                <p className={metricsValueClass}>{wins}-{losses}</p>
            </div>
            <div className={`${flexRowClass}`}>
                <p className={metricsLabelClass}>Streak</p>
                <p className={`${streak.includes("W") === true ? "text-green-700" : "text-red-700"} ${metricsValueClass}`}>{streak}</p>
            </div>
        </div>
    )

    const teamPointMetrics = (
        <div className={`${flexRowClass} gap-4`}>
            <div className={`${flexRowClass}`}>
                <p className={metricsLabelClass}>Pts For</p>
                <p className={metricsValueClass}>{fpts}</p>
            </div>
            <div className={`${flexRowClass}`}>
                <p className={metricsLabelClass}>Pts Against</p>
                <p className={`${metricsValueClass}`}>{fpts_against}</p>
            </div>
        </div>
    )


    return (
        <div className="flex flex-col w-full md:w-1/3 md:h-auto bg-gradient-to-r from-slate-500 to-slate-900 py-4 md:p-2 rounded relative bg-opacity-60 shadow shrink-0 md:from-transparent md:to-transparent md:shadow-none">
            <div className="flex flex-row md:flex-col w-full relative">
                <div className="w-1/6 md:absolute md:top-0 md:left-0 md:w-full md:h-full md:flex md:flex-row md:z-0 flex flex-row items-center justify-center pr-2">
                    <h3 className="font-bold text-slate-400 text-6xl md:text-slate-500 md:scale-125 md:opacity-70">{standing}</h3>
                </div>
                <div className="w-1/6 md:w-full flex flex-row items-center">
                    <img src={avatarImageUrl()} alt="" className="rounded w-full" />
                </div>
                <div className="flex flex-col pl-2 z-10">
                    <div className="">
                        <h4 className="text-4xl font-bold text-slate-400">{teamName()}</h4>
                    </div>
                    {teamMacroMetrics}
                    {teamPointMetrics}
                </div>
            </div>
            <div className="flex flex-row"></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.Users.users,
    }
}

export default connect(
    mapStateToProps,
    null
)(StandingCard);