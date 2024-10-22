import React from 'react';
import { connect } from 'react-redux';

import BattleRoyaleRow from './BattleRoyaleRow/BattleRoyaleRow';

const BattleRoyale = ({matchups}) => {

    const configureMatchups = () => {
        return matchups.sort((a, b) => {
            return b.points - a.points
        })
    }

    const renderMatchups = () => {
        return configureMatchups().map((matchupInfo, i) => <BattleRoyaleRow key={`${i}-${matchupInfo.roster_id}`} info={matchupInfo} index={i}/>)
    }

    return (
        <div className="flex flex-col">
            {renderMatchups()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        matchups: state.Matchups.matchups
    }
}

export default connect(
    mapStateToProps
)(BattleRoyale);