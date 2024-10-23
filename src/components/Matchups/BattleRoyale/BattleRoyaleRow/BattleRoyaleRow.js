import React from 'react';
import { connect } from 'react-redux';
import Urls from '../../../../config/Urls';
const {avatarUrl} = Urls;

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
        console.log("Data from the row", data)
        const {metadata, display_name, points, avatar} = data;
        const avatarImage = metadata.avatar !== undefined ? metadata.avatar : avatarUrl + avatar;
        const teamName = metadata.team_name !== undefined ? metadata.team_name : display_name;
        return (
            <div className="relative w-1/2 md:w-1/3 mx-auto hover:opacity-10 transiton-all duration-300">
                <img src={avatarImage} alt="Team Avatar" className="w-full z-index-1 rounded" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-row items-end justify-between p-1 bg-slate-900 bg-opacity-70 rounded">
                    <h4 className="text-sm md:text-2xl font-bold">{teamName}</h4>
                    <p className="text-sm md:text-2xl font-bold">{points}</p>
                </div>
            </div>
        )
    }

    const configureWinOrLoss = () => {
        const baseClass = "font-bold text-4xl absolute top-1/2 "
        if (index < rosters.length / 2) {
            return <h5 className={`${baseClass} text-green-700 `}>W</h5>
        } else {
            return <h5 className={`${baseClass} text-red-700`}>L</h5>
        }
    }

    return (
        <div className={`relative w-full py-2 ${index < rosters.length / 2 ? "bg-green-700" : "bg-red-700"} bg-opacity-20`}>
            <div className="absolue w-full h-full top-0 left-0 -z-index-1 flex flex-row items-center justify-center">
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