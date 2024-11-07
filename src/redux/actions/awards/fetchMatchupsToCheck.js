
const fetchMatchupsToCheck = fetchUrl => {
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS_TO_CHECK"});
        console.log(fetchUrl);
        let fetchUrlArray = fetchUrl.split('');
        console.log(fetchUrlArray[fetchUrl.length - 1]);
        if (fetchUrlArray[fetchUrl.length - 1] === "1") {
            console.log("Last fetch condition met")
            return dispatch({type: "ALL_MATCHUPS_TO_CHECK_FETCHED"})
        } else {
            return dispatch({type: "MATCHUPS_TO_CHECK_FETCHED"});
        }
    }
}

export default fetchMatchupsToCheck;