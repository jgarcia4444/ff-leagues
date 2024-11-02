import React from 'react';
import { connect } from 'react-redux';

import Urls from '../../../../config/Urls';
import AwardsCard from '../../../../shared/Cards/AwardsCard';
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
        return (
            <AwardsCard awardType={"MOST_POINTS_FOR"} user={user} extraValue={fpts} />
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