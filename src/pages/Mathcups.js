import React, {useState, useEffect} from 'react';
import Layout from '../shared/Layout';

const Matchups = () => {

    const [matchupInfo, setMatchupInfo] = useState();
    const [leagueWeek, setLeagueWeek] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (leagueWeek === 0) {
            // get nfl state to set the league week
        } else {
            // get the matchups for the week.
        }
    }, [leagueWeek])

    return (
        <Layout>
            
        </Layout>
    )
}

export default Matchups;