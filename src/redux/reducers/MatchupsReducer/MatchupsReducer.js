
const initialState = {
    matchups: [],
    loading: false,
    matchupsConfigured: false,
}

const MatchupsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CONFIGURING_MATCHUPS":
            return {
                ...state,
                loading: true,
            }
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