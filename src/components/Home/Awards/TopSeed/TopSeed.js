import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../../config/Urls';
const {avatarUrl} = Urls;

const TopSeed = ({users, rosters}) => {


    const presentTopSeed = () => {
        const roster = rosters.sort((a, b) => b.settings.fpts - a.settings.fpts)[0];
        const user = users.filter(userInfo => userInfo.user_id === roster.owner_id)[0];
        const {metadata, avatar} = user
        const avatarImage = () => {
            return metadata.avatar === undefined ? `${avatarUrl}${avatar}` : metadata.avatar;
        }

        const {team_name} = metadata;

        const teamName = team_name === undefined ? user.display_name : team_name;

        return (
            <div className="w-full flex flex-col relative">
                <img src={avatarImage()} alt="Team Avatar" className="rounded" />
                <div className="absolute flex flex-row items-end justify-start top-0 left-0 w-full h-full rounded bg-white bg-opacity-50 p-2">
                    <h5 className="text-slate-700 font-bold text-xl">{teamName}</h5>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full md:w-1/4">
            <h3 className="text-slate-500 text-2xl font-bold uppercase">Top Seed</h3>
            {presentTopSeed()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        rosters: state.Rosters.rosters,
        users: state.Users.users,
    }
}

export default connect(
    mapStateToProps,
    null
)(TopSeed);