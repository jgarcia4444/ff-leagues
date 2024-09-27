import getNflState from "../nflState/getNflState";
import Urls from "../../../config/Urls";
const {matchupsUrl} = Urls;

const selectProperties = data => {
    return data.map(item => {
        const {roster_id, matchup_id, points} = item
        return {
            roster_id,
            matchup_id,
            points,
        }
    })
}

const fetchMatchups = (nflWeek) => {
    console.log("Fetch Matchups triggered")
    const configuredUrl = `${matchupsUrl}${nflWeek}`;
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS"});
        fetch(configuredUrl)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    const matchupsData = selectProperties(data);
                    console.log(matchupsData);
                    return dispatch({type: "MATCHUPS_FETCHED", matchups: matchupsData});
                }, 750)
            })
    }
}

export default fetchMatchups;