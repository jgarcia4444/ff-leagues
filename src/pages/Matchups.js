import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Layout from '../shared/Layout';
import SpinningLoader from '../shared/Loaders/SpinningLoader';
import LeagueMatchups from '../components/Matchups/LeagueMatchups';

import fetchMatchups from '../redux/actions/matchups/fetchMatchups';
import getNflState from '../redux/actions/nflState/getNflState';
import PageTitle from '../shared/Titles/PageTitle';

const Matchups = ({getNflState, NflState, fetchMatchups, Matchups}) => {

    const {nflWeek} = NflState;
    const {matchups} = Matchups;

    useEffect(() => {
        if (nflWeek === 0) {
            getNflState()
        } else {
            if (matchups.length === 0) {
                fetchMatchups(nflWeek);
            }
        }
    },[nflWeek, matchups])

    return (
        <Layout>
            <PageTitle title={"Matchups"}/>
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