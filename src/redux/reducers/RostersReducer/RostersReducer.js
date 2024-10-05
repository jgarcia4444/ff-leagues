const initialState = {
    loading: false,
    rosters: [],
    error: ""
};

const RostersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCHING_ROSTERS":
            return {
                ...state,
                loading: true,
            }
        case "ROSTERS_FETCHED":
            return {
                ...state,
                loading: false,
                rosters: action.rosters
            }
        case "ROSTERS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return {
                ...state
            }
    }
}

export default RostersReducer;