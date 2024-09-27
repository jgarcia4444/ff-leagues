import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Layout from '../shared/Layout';
import SpinningLoader from '../shared/Loaders/SpinningLoader';
import LeagueMatchups from '../components/Matchups/LeagueMatchups';

import fetchMatchups from '../redux/actions/matchups/fetchMatchups';
import getNflState from '../redux/actions/nflState/getNflState';
import configureMatchups from '../redux/actions/matchups/configureMatchups';

const Matchups = ({getNflState, NflState, fetchMatchups, Matchups, configureMatchups}) => {

    const {nflWeek} = NflState;
    const {matchups, matchupsConfigured} = Matchups;

    useEffect(() => {
        if (matchupsConfigured === false) {
            if (nflWeek === 0) {
                getNflState();
            } else if (nflWeek !== 0 && matchups.length === 0) {
                if (matchups.length === 0) {
                    fetchMatchups(nflWeek);
                }
            } else {
                configureMatchups(matchups);
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
        configureMatchups: matchups => dispatch(configureMatchups(matchups)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matchups);