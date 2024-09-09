import React, {useState, useEffect} from 'react';

import Layout from '../shared/Layout';
import Urls from '../config/Urls';
import SpinningLoader from '../shared/Loaders/SpinningLoader';

const Matchups = () => {

    const {nflStateUrl, matchupsUrl} = Urls

    const [matchupInfo, setMatchupInfo] = useState(null);
    const [leagueWeek, setLeagueWeek] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (leagueWeek === 0) {
            fetch(nflStateUrl)
                .then(res => res.json())
                .then(data => {
                    setLeagueWeek(data.display_week);
                })
        } else if (matchupInfo === null) {
            // get the matchups for the week.
            const configuredUrl = `${matchupsUrl}${leagueWeek}`
            fetch(configuredUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMatchupInfo(data);
                })
        }
    }, [leagueWeek])

    return (
        <Layout>
            <SpinningLoader />
        </Layout>
    )
}

export default Matchups;