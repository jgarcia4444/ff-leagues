import React from 'react';
import {connect} from 'react-redux'

import Matchup from './Matchup/Matchup';

const LeagueMatchups = ({matchups}) => {

    const filterMathchups = () => {
        const upperLimit = (matchups.length / 2) + 1;
        const filteredMatchups = [];
        let i = 1;
        while (i < upperLimit) {
            let matchingMatchIds = matchups.filter(matchup => matchup.matchup_id === i);
            let matchupInfo = {
                team1: matchingMatchIds[0],
                team2: matchingMatchIds[1]
            }
            filteredMatchups.push(matchupInfo);
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
    }
} 

export default connect(
    mapStateToProps,
    null
)(LeagueMatchups);