import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../../config/Urls';
import AwardsCard from '../../../../shared/Cards/AwardsCard';
import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
const {avatarUrl} = Urls;

const TopSeed = ({users, rosters}) => {


    const presentTopSeed = () => {
        const roster = rosters.sort((a, b) => b.settings.fpts - a.settings.fpts)[0];
        const user = users.filter(userInfo => userInfo.user_id === roster.owner_id)[0];

        return (
            <AwardsCard awardType='TOP_SEED' user={user}  />
        )
    }

    return (
        <div className="w-full md:w-1/4">
            <AwardsTitle text={"Top Seed"} />
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