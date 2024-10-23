import React from 'react';
import { connect } from 'react-redux';

const MostPointsFor = ({rosters, users}) => {
    const getHighestScoringRoster = () => {
        return rosters.sort((a, b) => {
            return b.settings.fpts - a.settings.fpts;
        })[0]
    }

    const presentAwardedUser = () => {
        let highestScoringRoster = getHighestScoringRoster();
        let user = users.filter(user => user.user_id === highestScoringRoster.owner_id)[0];
    }

    <div className="">

    </div>
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