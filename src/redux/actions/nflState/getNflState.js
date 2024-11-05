import Urls from "../../../config/Urls";
const {nflStateUrl} = Urls;

const getNflState = () => {
    console.log("Get nfl state action triggered")
    return async dispatch => {
        dispatch({type: "GETTING_NFL_STATE"});
        fetch(nflStateUrl)
            .then(res => res.json())
            .then(data => {
                console.log("Here is the data from get nfl state.", data)
                return dispatch({type: "NFL_STATE_RECEIVED", nflWeek: data.display_week });
            })
    }
};

export default getNflState;