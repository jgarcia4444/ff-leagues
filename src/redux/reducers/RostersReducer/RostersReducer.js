const initialState = {
    loading: false,
    rosters: [],
    error: ""
};

const calculateStandings = rosters => {
    rosters = rosters.sort((a, b) => {
        if (b.settings.wins !== a.settings.wins) {
            return b.settings.wins - a.settings.wins
        } else {
            return b.settings.fpts - a.settings.fpts;
        }
    })
    return rosters.map((roster, i) => {
        return {
            ...roster,
            standing: i + 1
        }
    })
}

const RostersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CLEAR_DATA":
            return {
                ...initialState,
            }
        case "persist/REHYDRATE":
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
                rosters: rostersWithStandings,
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