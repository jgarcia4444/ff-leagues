import React from 'react';
import { connect } from 'react-redux';

import AwardsCard from '../../../../shared/Cards/AwardsCard';
import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
import AwardsCardWrapper from '../../../../shared/Cards/AwardsCardWrapper';

const TopSeed = ({users, rosters}) => {


    const presentTopSeed = () => {
        // .sort((a, b) => b.settings.fpts - a.settings.fpts)
        const roster = rosters[0];
        const user = users.filter(userInfo => userInfo.user_id === roster.owner_id)[0];

        return (
            <AwardsCard awardType='TOP_SEED' user={user}  />
        )
    }

    return (
        <AwardsCardWrapper>
            <AwardsTitle text={"Top Seed"} />
            {presentTopSeed()}
        </AwardsCardWrapper>
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