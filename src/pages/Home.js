import React, {useState, useEffect} from 'react'

import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Awards from '../components/Home/Awards/Awards';

import Urls from '../config/Urls';

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
        getLeagueInfo();
    })

    return (
        <main className="">
            <h2 className="text-2xl">Home</h2>
            <HomeHeader leagueInfo={leagueInfo} />
            <Awards />
        </main>
    )
}

export default Home;