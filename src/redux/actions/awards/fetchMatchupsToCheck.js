
const fetchMatchupsToCheck = fetchUrl => {
    return async dispatch => {
        dispatch({type: "FETCHING_MATCHUPS_TO_CHECK"});
        let fetchUrlArray = fetchUrl.split('');
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                let nflWeek = parseInt(fetchUrlArray[fetchUrlArray.length - 1], 10);
                let mappedData = data.map(matchup => {
                    return {
                        ...matchup,
                        nflWeek, 
                    }
                })
                if (nflWeek === 1) {
                    return dispatch({type: "ALL_MATCHUPS_TO_CHECK_FETCHED", matchups: mappedData});
                } else {
                    return dispatch({type: "MATCHUPS_TO_CHECK_FETCHED", matchups: mappedData});
                }
            })
    }
}

export default fetchMatchupsToCheck;