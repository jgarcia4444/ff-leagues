import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../config/Urls';
const {avatarUrl} = Urls;

const StandingCard = ({roster, users}) => {
    console.log("Standing card roster info", roster);
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
        if (metadata.tean_name !== undefined) {
            return metadata.team_name;
        } else {
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
        <div className="flex flex-col w-full bg-gradient-to-r from-slate-500 to-slate-900 py-2 rounded relative bg-opacity-60 shadow">
            <div className="flex flex-row w-full">
                <div className="w-1/6 flex flex-row items-center justify-center pr-2">
                    <h3 className="text-4xl font-bold text-slate-400">{standing})</h3>
                </div>
                <div className="w-1/6 flex flex-row items-center">
                    <img src={avatarImageUrl()} alt="" className="rounded w-full" />
                </div>
                <div className="flex flex-col pl-2">
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