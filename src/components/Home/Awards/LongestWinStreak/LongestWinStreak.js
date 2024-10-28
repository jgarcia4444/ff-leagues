import React from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';

const LongestWinStreak = ({users, rosters}) => {

    const calculateWinningStreak = record => {
        let recordArray = record.split("");
        let maxStreak = 0;
        let i = 0;
        while (i < recordArray.length - 1) {
            let currentNum = recordArray[i];
            let nextNum = recordArray[i + 1];
            if (currentNum === "W") {
                if (currentNum === nextNum) {
                    
                }
            }
        }
    }

    const presentUser = () => {
        const rostersWithStreaks = rosters.map(roster => {
            const rosterStreak = 0;
            const {metadata} = roster;
            rosterStreak = calculateWinningStreak(metadata.record)
        })
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