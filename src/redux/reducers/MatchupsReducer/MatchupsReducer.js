
const initialState = {
    matchups: [],
    loading: false,
}

const MatchupsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCHING_MATCHUPS":
            return {
                ...state,
                loading: true,
            }
        case "MATCHUPS_FETCHED":
            return {
                ...state,
                loading: false,
                matchups: action.matchups,
            }
        default:
            return {
                ...state,
            }
    }
}

export default MatchupsReducer;