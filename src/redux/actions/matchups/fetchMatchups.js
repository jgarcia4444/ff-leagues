import Urls from "../../../config/Urls";
const {matchupsUrl} = Urls;

const fetchMatchups = (nflWeek) => {
    console.log("Fetch Matchups action triggered!");
    const configuredUrl = `${matchupsUrl}${nflWeek}`;
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS"});
        fetch(configuredUrl)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    return dispatch({type: "MATCHUPS_FETCHED", matchups: data});
                }, 750)
            })
    }
}

export default fetchMatchups;