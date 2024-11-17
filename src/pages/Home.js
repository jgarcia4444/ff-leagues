import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Awards from '../components/Home/Awards/Awards';

import Layout from '../shared/Layout';
import fetchRosters from '../redux/actions/rosters/fetchRosters';
import getNflState from '../redux/actions/nflState/getNflState';
import getLeagueInfo from '../redux/actions/league/getLeagueInfo';
import fetchUsers from '../redux/actions/users/fetchUsers';
import SpinningLoader from '../shared/Loaders/SpinningLoader';

const Home = ({Users, fetchUsers, getNflState, fetchRosters, getLeagueInfo, Rosters, NflState, leagueInfo, clearData}) => {

    const [loading , setLoading] = useState(true);

    

    const fetchData = () => { 
        if (leagueInfo.name === "") {
            getLeagueInfo();
        }
        if (Rosters.rosters.length === 0) {
            fetchRosters();
        }
        console.log("GET NFL STATE RAN FROM THE HOME PAGE.")
        getNflState();
        if (Users.users.length === 0) {
            fetchUsers();
        }
        if (Rosters.loading === false) {
            if (Users.loading === false) {
                if (NflState.nflWeek !== 0) {
                    setLoading(false);
                }
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [Rosters.rosters.length, Users.users.length, NflState.nflWeek])

    const refreshButton = (
        <button onClick={clearData}>Refresh</button>
    )

    return (
        <Layout >
            <main className="text-white flex flex-col gap-8 h-4/5 overflow-y-auto py-4 mt-2">
                <HomeHeader leagueInfo={leagueInfo} />
                {refreshButton}
                {loading === true ?
                <SpinningLoader/>
                :
                <Awards />
                }
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
        clearData: () => dispatch({type: "CLEAR_DATA"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);