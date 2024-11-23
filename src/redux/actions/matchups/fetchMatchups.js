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
    const configuredUrl = `${matchupsUrl}${nflWeek}`;
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS"});
        fetch(configuredUrl)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    const matchupsData = selectProperties(data);
                    return dispatch({type: "MATCHUPS_FETCHED", matchups: matchupsData});
                }, 750)
            })
    }
}

export default fetchMatchups;