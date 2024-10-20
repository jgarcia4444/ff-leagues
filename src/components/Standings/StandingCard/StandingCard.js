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
                <div className="">
                    <h3 className="">{standing}</h3>
                </div>
                <div className="">
                    <img src={avatarImageUrl()} alt="" className="rounded w-3/4" />
                </div>
                <div className="flex flex-col">
                    <div className=""></div>
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