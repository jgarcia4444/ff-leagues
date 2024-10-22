import React from 'react';
import { connect } from 'react-redux';

const BattleRoyaleRow = ({info, rosters, users, index}) => {

    const dataToPresent = () => {
        let roster = rosters.filter(reduxRoster => reduxRoster.roster_id === info.roster_id)[0];
        let user = users.filter(reduxUser => reduxUser.user_id === roster.owner_id)[0];
        return {
            ...info,
            ...user
        }
    }
    const presentUser = () => {
        let data = dataToPresent();
        const {} = data;
        return (
            <div className="">

            </div>
        )
    }

    const configureWinOrLoss = () => {
        if (index < rosters.length / 2) {
            // winner
        } else {
            // loser
        }
    }

    return (
        <div className="relative w-full py-6">
            <div className="absolue w-full h-full top-0 left-0">
                {configureWinOrLoss()}
            </div>
            {presentUser()}
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
)(BattleRoyaleRow);