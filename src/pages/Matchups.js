import React, {useState, useEffect} from 'react';

import Urls from '../config/Urls';

import Layout from '../shared/Layout';
import SpinningLoader from '../shared/Loaders/SpinningLoader';
import LeagueMatchups from '../components/Matchups/LeagueMatchups';

const Matchups = () => {

    const {nflStateUrl, matchupsUrl} = Urls
    const [leagueWeek, setLeagueWeek] = useState(0);
    const [loading, setLoading] = useState(false);
    const [matchups, setMatchups] = useState([]);

    const getMatchups = leagueWeek => {
        const configuredUrl = `${matchupsUrl}${leagueWeek}`
            fetch(configuredUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMatchups(data);
                    setLoading(false);
                })
    }

    useEffect(() => {
        if (leagueWeek === 0) {
            setLoading(true);
            fetch(nflStateUrl)
                .then(res => res.json())
                .then(data => {
                    setLeagueWeek(data.display_week);
                    getMatchups(data.display_week);
                })
        } 
    }, [leagueWeek])

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

export default Matchups;