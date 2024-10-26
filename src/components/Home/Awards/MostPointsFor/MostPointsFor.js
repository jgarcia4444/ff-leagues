import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../../config/Urls';
const {avatarUrl} = Urls;

const MostPointsFor = ({rosters, users}) => {
    const getHighestScoringRoster = () => {
        return rosters.sort((a, b) => {
            return b.settings.fpts - a.settings.fpts;
        })[0]
    }

    const presentAwardedUser = () => {
        let highestScoringRoster = getHighestScoringRoster();
        const {settings} = highestScoringRoster;
        const {fpts} = settings;
        let user = users.filter(user => user.user_id === highestScoringRoster.owner_id)[0];
        let userMetadata = user.metadata;
        let configuredAvatar = userMetadata.avatar === undefined ? `${avatarUrl}${user.avatar}` : userMetadata.avatar;
        let teamName = userMetadata.team_name !== undefined ? userMetadata.team_name : user.display_name; 
        return (
            <div className="w-full flex flex-col relative ">
                <img src={configuredAvatar} alt="Team Avatar" className="w-full rounded" />
                <div className="absolute w-full h-full flex flex-row items-end justify-between top-0 left-0 bg-white bg-opacity-50 rounded p-2">
                    <h5 className="text-slate-700 font-bold text-xl">{teamName}</h5>
                    <p className="text-slate-700 font-bold text-xl">{fpts}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full md:w-1/4">
            <h3 className="text-slate-500 text-2xl font-bold uppercase">Most Points For</h3>
            {presentAwardedUser()}
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
)(MostPointsFor);