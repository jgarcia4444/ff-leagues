import React from 'react';
import { connect } from 'react-redux';

const BattleRoyale = () => {

    const configureMatchups = () => {
        
    }

    return (
        <div className=""></div>
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