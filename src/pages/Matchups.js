import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Urls from '../config/Urls';

import Layout from '../shared/Layout';
import SpinningLoader from '../shared/Loaders/SpinningLoader';
import LeagueMatchups from '../components/Matchups/LeagueMatchups';

import fetchMatchups from '../redux/actions/matchups/fetchMatchups';
import getNflState from '../redux/actions/nflState/getNflState';

const Matchups = ({getNflState, NflState, fetchMatchups, Matchups}) => {

    const {nflWeek} = NflState;
    const {matchups} = Matchups;

    useEffect(() => {
        console.log("From the useeffect of the Matchups component.")
        if (nflWeek === 0) {
            getNflState();
        } else {
            if (matchups.length === 0) {
                fetchMatchups(nflWeek);
            }
        }
    },[nflWeek])

    return (
        <Layout>
            {NflState.loading === true || Matchups.loading === true  ?
                <SpinningLoader />
                :
                <LeagueMatchups />
            }
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        NflState: state.NflState,
        Matchups: state.Matchups,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNflState: () => dispatch(getNflState()),
        fetchMatchups: nflWeek => dispatch(fetchMatchups(nflWeek)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matchups);