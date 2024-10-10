import React from 'react';
import {connect} from 'react-redux'

import Matchup from './Matchup/Matchup';

const LeagueMatchups = ({matchups, rosters, users}) => { 

    const getRoster = roster_id => {
        return rosters.filter(roster => roster.roster_id === roster_id)[0];
    }
    
    const getUser = owner_id => {
        return users.filter(user => user.user_id === owner_id)[0];
    }

    const configureMatchupInfo = matchingMatchIds => {
        return matchingMatchIds.map(matchupInfo => {
            let {roster_id} = matchupInfo;
            let rosterInfo = getRoster(roster_id);
            let {owner_id} = rosterInfo;
            let userInfo = getUser(owner_id);
            return {
                ...matchupInfo,
                ...userInfo,
                ...rosterInfo,
            }
        })
    }

    const filterMathchups = () => {
        const upperLimit = (matchups.length / 2) + 1;
        const filteredMatchups = [];
        let i = 1;
        while (i < upperLimit) {
            let matchingMatchIds = matchups.filter(matchup => matchup.matchup_id === i);
            let matchupInfo = configureMatchupInfo(matchingMatchIds);
            filteredMatchups.push({team1: matchupInfo[0], team2: matchupInfo[1]});
            i += 1;
        }
        console.log(filteredMatchups);
        return filteredMatchups;
    }

    const renderMatchups = () => {
        const filteredMatchups = filterMathchups();
        return filteredMatchups.map((matchup, i) => <Matchup info={matchup} key={`${i}-${matchup.team1.matchup_id}`} />)
    }

    return (
        <div className="w-full my-auto flex flex-row flex-wrap justify-around items-center">
            {renderMatchups()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        matchups: state.Matchups.matchups,
        users: state.Users.users,
        rosters: state.Rosters.rosters,
    }
} 

export default connect(
    mapStateToProps,
    null
)(LeagueMatchups);