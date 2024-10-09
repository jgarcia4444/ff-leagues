import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Awards from '../components/Home/Awards/Awards';

import Layout from '../shared/Layout';
import fetchRosters from '../redux/actions/rosters/fetchRosters';
import getNflState from '../redux/actions/nflState/getNflState';
import getLeagueInfo from '../redux/actions/league/getLeagueInfo';
import fetchUsers from '../redux/actions/users/fetchUsers';

const Home = ({Users, fetchUsers, getNflState, fetchRosters, getLeagueInfo, Rosters, NflState, leagueInfo}) => {

    

    const fetchData = () => {
        if (leagueInfo.name === "") {
            getLeagueInfo();
        }
        if (Rosters.rosters.length === 0) {
            fetchRosters();
        }
        if (NflState.nflWeek === 0) {
            getNflState();
        }
        if (Users.users.length === 0) {
            fetchUsers();
        }
        console.log("Here is the roster info", Rosters.rosters);
        console.log("Here are the users", Users.users);
    }

    useEffect(() => {
        fetchData();
    }, [])

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
        NflState: state.NflState,
        leagueInfo: state.League.leagueInfo,
        Users: state.Users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRosters: () => dispatch(fetchRosters()),
        getNflState: () => dispatch(getNflState()),
        getLeagueInfo: () => dispatch(getLeagueInfo()),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);