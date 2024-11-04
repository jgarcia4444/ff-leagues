import Urls from "../../../config/Urls";
const {matchupsUrl} = Urls;


const fetchMatchupsToCheck = (from, to) => {
    console.log(`FROM: ${from}, TO: ${to}`);
    const matchups = [];
    return dispatch => {
        dispatch({type: "FETCHING_MATCHUPS_TO_CHECK"});
        let i = to;
        while (i > from) {
            let url = `${matchupsUrl}${i}`;
            console.log("URL IN FETCH MATCHUPS TO CHECK", url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log("DATA FROM FETCH MATCHUPS TO CHECK", data);
                    let mappedData = data.map(info => {
                        return {
                            roster_id: info.roster_id,
                            points: info.points,
                            nflWeek: i
                        }
                    })
                    console.log("MAPPED DATA", mappedData)
                    matchups.concat(mappedData)
                });
            i -= 1;
        }
        return dispatch({type: "MATCHUPS_TO_CHECK_FETCHED", matchupsToCheck: matchups})
    }
}

export default fetchMatchupsToCheck;