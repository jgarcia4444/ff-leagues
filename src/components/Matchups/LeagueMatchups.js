import React, {useState} from 'react';
import {connect} from 'react-redux'

import Matchup from './Matchup/Matchup';
import BattleRoyale from './BattleRoyale/BattleRoyale';
import MatchupsFilter from './MatchupsFilter/MatchupsFilter';

const LeagueMatchups = ({matchups, rosters, users}) => { 

    const [matchupsChosen, setMatchupsChosen] = useState(true);

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
                metadata: {
                    ...userInfo.metadata,
                    ...rosterInfo.metadata,
                }
            }
        })
    }

    console.log("MATCHUPS ", matchups)

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
        if (matchupsChosen === true) {
            return filteredMatchups.map((matchup, i) => <Matchup info={matchup} key={`${i}-${matchup.team1.matchup_id}`} />)
        } else {
            return <BattleRoyale />
        }
    }

    return (
        <div className="flex flex-col justify-start w-full">    
            <MatchupsFilter matchupsChosen={matchupsChosen} handleChange={setMatchupsChosen} />
            <div className="w-full my-auto flex flex-row flex-wrap justify-around items-center">
                {renderMatchups()}
            </div>
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