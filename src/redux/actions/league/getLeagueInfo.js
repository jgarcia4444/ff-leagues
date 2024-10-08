import Urls from "../../../config/Urls";
const {leagueUrl} = Urls;
const getLeagueInfo = () => {
    return async dispatch => {
        dispatch({type: "FETCHING_LEAGUE_INFO"})
        fetch(leagueUrl)
            .then(res => res.json())
            .then(data => {
                return dispatch({type: "LEAGUE_INFO_FETCHED", leagueInfo: data});
            })
            .catch(err => {
                return dispatch({type: "LEAGUE_INFO_FETCH_ERROR", error: err})
            })
    }
}

export default getLeagueInfo;