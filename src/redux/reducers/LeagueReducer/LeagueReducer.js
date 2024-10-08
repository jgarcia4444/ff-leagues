const initialState = {
    loading: false,
    leagueInfo: {},
    error: ""
}

const LeagueReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCHING_LEAGUE_INFO":
            return {
                ...initialState,
                loading: true,
            }
        case "LEAGUE_INFO_FETCHED":
            return {
                ...initialState,
                leagueInfo: action.leagueInfo
            }
        case "LEAGUE_INFO_FETCH_ERROR":
            return {
                ...initialState,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export default LeagueReducer;