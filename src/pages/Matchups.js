import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Urls from '../config/Urls';

import Layout from '../shared/Layout';
import SpinningLoader from '../shared/Loaders/SpinningLoader';
import LeagueMatchups from '../components/Matchups/LeagueMatchups';

import getNflState from '../redux/actions/nflState/getNflState';

const Matchups = ({getNflState}) => {

    const {nflStateUrl, matchupsUrl} = Urls
    const [leagueWeek, setLeagueWeek] = useState(0);
    const [loading, setLoading] = useState(false);
    const [matchups, setMatchups] = useState([]);

    useEffect(() => {

    },)

    return (
        <Layout>
            {loading === true ?
                <SpinningLoader />
                :
                <LeagueMatchups matchups={matchups} />
            }
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        NflState: state.NflState,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNflstate: () => dispatch(getNflState())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matchups);