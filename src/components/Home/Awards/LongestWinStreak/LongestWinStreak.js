import React from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';

const LongestWinStreak = ({users, rosters}) => {

    const presentUser = () => {

    }
    return (
        <div className="">
            <AwardsTitle text={"Longest Win Streak"} />
            {presentUser()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        users: state.Users.users,
        rosters: state.Rosters.rosters,
    }
}

export default connect(
    mapStateToProps,
    null
)(LongestWinStreak);