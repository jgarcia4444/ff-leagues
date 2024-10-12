const initialState = {
    loading: false,
    rosters: [],
    error: ""
};

const calculateStandings = rosters => {
    // standings logic
}

const RostersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CLEAR_DATA":
            return {
                ...initialState,
            }
        case "persist/REHYDRATE":
            console.log(action.payload)
            if (action.payload) {
                return {
                    ...action.payload.Rosters
                }
            } else {
                return {
                    ...state,
                }
            }
        case "FETCHING_ROSTERS":
            return {
                ...state,
                loading: true,
            }
        case "ROSTERS_FETCHED":
            const rostersWithStandings = calculateStandings(action.rosters);
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