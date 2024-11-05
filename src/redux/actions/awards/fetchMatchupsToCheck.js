import Urls from "../../../config/Urls";
const {matchupsUrl, nflStateUrl} = Urls;


const fetchMatchupsToCheck = nflWeek => {
    console.log("FETCH MATCHUPS TO CHECK TRIGGERED", nflWeek);
    let url = `${matchupsUrl}${nflWeek}`;
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS_TO_CHECK"});
        if (nflWeek === 0) {
            return dispatch({type: "ALL_MATCHUPS_TO_CHECK_FETCHED"});
        } else {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let mappedData = data.map(info => {
                        return {
                            ...info,
                            nflWeek: nflWeek
                        }
                    })
                    return dispatch({type: "MATCHUPS_TO_CHECK_FETCHED", matchupsToCheck: mappedData});
                })
        }
    }
}

export default fetchMatchupsToCheck;