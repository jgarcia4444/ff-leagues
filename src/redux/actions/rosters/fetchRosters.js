
import Urls from "../../../config/Urls";
const {rosters} = Urls;

const fetchRosters = () => {
    return async dispatch => {
        dispatch({type: "FETCHING_ROSTERS"});
        fetch(rosters)
            .then(res => res.json())
            .then(data => {
                return dispatch({type: "ROSTERS_FETCHED", rosters: data})
            })
            .catch(err => {
                return dispatch({type: "ROSTERS_ERROR", error: err})
            })
    }
}

export default fetchRosters;