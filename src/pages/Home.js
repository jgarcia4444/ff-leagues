import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Awards from '../components/Home/Awards/Awards';

import Urls from '../config/Urls';
import Layout from '../shared/Layout';
import fetchRosters from '../redux/actions/rosters/fetchRosters';
import getNflState from '../redux/actions/nflState/getNflState';

const Home = ({getNflState, fetchRosters, Rosters, NflState}) => {

    const {leagueUrl} = Urls;

    const [leagueInfo, setLeagueInfo] = useState({
        name: "",
        avatar: ""
    });

    const getLeagueInfo = () => {
        fetch(leagueUrl)
            .then(res => res.json())
            .then(data => setLeagueInfo(data))
    }

    useEffect(() => {
        if (leagueInfo.name === "") {
            getLeagueInfo();
        }
    })

    return (
        <Layout >
            <main className="text-white flex flex-col gap-8">
                <HomeHeader leagueInfo={leagueInfo} />
                <Awards />
            </main>
        </Layout>
    )
}

const mapStateToProps = state =>  {
    return {
        Rosters: state.Rosters,
        NflState: state.NflState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRosters: () => dispatch(fetchRosters()),
        getNflState: () => dispatch(getNflState()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);