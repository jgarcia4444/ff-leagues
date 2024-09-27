import getNflState from "../nflState/getNflState";
import Urls from "../../../config/Urls";
const {matchupsUrl} = Urls;

const fetchMatchups = (nflWeek) => {
    const configuredUrl = `${matchupsUrl}${nflWeek}`;
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS"});
        fetch(configuredUrl)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    const {roster_id, matchup_id, points} = data;
                    const matchupsData = {
                        roster_id,
                        matchup_id,
                        points,
                    }
                    return dispatch({type: "MATCHUPS_FETCHED", matchups: matchupsData});
                }, 750)
            })
    }
}

export default fetchMatchups;