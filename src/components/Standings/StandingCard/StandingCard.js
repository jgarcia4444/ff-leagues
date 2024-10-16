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


    return (
        <div className=""></div>
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