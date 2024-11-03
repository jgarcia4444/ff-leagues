const initialState = {
    matchupsToCheck: [],
    loading: false,
    highestScoringInfo: {
        roster_id: null,
        points: 0,
        nflWeekSet: null
    }
};

// Initially get all matchup info from previous weeks.
// set info for the highest scoring week
// {roster_id, points, nfl_week_set}

const HighestScoringWeekReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default HighestScoringWeekReducer;