const initialState = {
    nflWeek: 0,
    loading: false,
};

const NFLStateReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GETTING_NFL_STATE":
            return {
                ...state,
                loading: true,
            }
        case "NFL_STATE_RECEIVED":
            return {
                ...state,
                loading: false,
                nflWeek: action.nflWeek,
            }
        default:
            return {
                ...state,
            }
    }
}

export default NFLStateReducer;