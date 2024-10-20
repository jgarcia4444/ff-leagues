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
    console.log("User found from the roster owner id", user);
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

    const teamMacroMetrics = (
        <div className="flex flex-row">

        </div>
    )


    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full">
                <div className="w-1/6 flex flex-row items-start justify-end pr-2">
                    <h3 className="text-4xl font-bold text-slate-400">{standing})</h3>
                </div>
                <div className="w-1/6 bg-white">
                    <img src={avatarImageUrl()} alt="" className="rounded w-full" />
                </div>
                <div className="flex flex-col">
                    <div className="ml-2">
                        <h4 className="text-4xl font-bold text-slate-400">{teamName()}</h4>
                    </div>
                    {teamMacroMetrics}
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