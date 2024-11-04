import Urls from "../../../config/Urls";
const {nflStateUrl} = Urls;

const getNflState = () => {
    return async dispatch => {
        dispatch({type: "GETTING_NFL_STATE"});
        fetch(nflStateUrl)
            .then(res => res.json())
            .then(data => {
                return dispatch({type: "NFL_STATE_RECEIVED", nflWeek: data.display_week });
            })
    }
};

export default getNflState;