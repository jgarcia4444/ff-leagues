import React, {useState, useEffect} from 'react'

import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Awards from '../components/Home/Awards/Awards';

import Urls from '../config/Urls';
import Layout from '../shared/Layout';

const Home = () => {

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
            <main className="text-white">
                <h2 className="text-2xl">Home</h2>
                <HomeHeader leagueInfo={leagueInfo} />
                <Awards />
            </main>
        </Layout>
    )
}

export default Home;