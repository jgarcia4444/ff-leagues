import React from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';

const LongestWinStreak = ({users, rosters}) => {

    const calculateWinningStreak = record => {
        let recordArray = record.split("");
        let maxStreak = 0;
        let i = 0;
        if (recordArray.every(winOrLoss => winOrLoss === "W")) {
            maxStreak = recordArray.length;
        } else if (recordArray.every(winOrLoss => winOrLoss === "L")) {
            maxStreak = 0;
        } else {
            let currentStreak = 0;
            let i = 0;
            while (i < recordArray.length - 1) {
                let currentChar = recordArray[i];
                if (currentChar === "W") {
                    currentStreak = 1;
                    let k = i + 1;
                    let nextChar = recordArray[k];
                    while (k < recordArray.length) {
                        if (currentChar === nextChar) {
                            currentStreak += 1;
                        } else {
                            break;
                        }
                        nextChar = recordArray[k + 1]
                        k += 1;
                    }
                    if (currentStreak > maxStreak) {
                        maxStreak = currentStreak;
                    }
                }
                i += 1;
            }
        }
        return maxStreak
    }

    const presentUser = () => {
        const rostersWithStreaks = rosters.map(roster => {
            const rosterStreak = 0;
            const {metadata} = roster;
            rosterStreak = calculateWinningStreak(metadata.record);
            return {
                ...roster,
                winStreak: rosterStreak,
            }
        })
        const rosterWithLongestStreak = rostersWithStreaks.filter((a, b) => b.winStreak - a.winStreak)[0];
        const user = users.filter(user => user.user_id === rosterWithLongestStreak.owner_id)[0];
        return (
            <div className="">
                
            </div>
        )
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