import Urls from "../../../config/Urls";
const {matchupsUrl, nflStateUrl} = Urls;


const fetchMatchupsToCheck = () => {
    var matchups = [];
    return dispatch => {
        dispatch({type: "FETCHING_MATCHUPS_TO_CHECK"});
        let i;
        fetch(nflStateUrl)
            .then(res => res.json())
            .then(data => {
                let {week} = data;
                i = week
                console.log("I / nfl week", i)
                while (i > 0) {
                    let url = `${matchupsUrl}${week}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            console.log("data before it is mapped", data)
                            console.log("What nfl week is being set to in the mapping of the data", i)
                            let mappedData = data.map(info => {
                                return {
                                    roster_id: info.roster_id,
                                    points: info.points,
                                    nflWeek: i
                                }
                            })
                            console.log("MAPPED DATA", mappedData)
                            mappedData.array.forEach(element => {
                                matchups.push(element)
                            });
                        });
                    i -= 1;
                }
                console.log("MATCHUPS GOING BACK TO THE REDUCER", matchups)
                return dispatch({type: "MATCHUPS_TO_CHECK_FETCHED", matchupsToCheck: matchups})
            })
    }
}

export default fetchMatchupsToCheck;