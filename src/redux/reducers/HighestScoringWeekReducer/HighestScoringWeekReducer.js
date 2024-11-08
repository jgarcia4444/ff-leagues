const initialState = {
    matchupsToCheck: [],
    loading: false,
    highestScoringInfo: {
        rosterId: null,
        points: 0,
        nflWeekSet: 0,
        highestScoreSet: false,
    },
    highestScoreSet: false,
};

// Initially get all matchup info from previous weeks.
// set info for the highest scoring week
// {roster_id, points, nfl_week_set}

const HighestScoringWeekReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ALL_MATCHUPS_TO_CHECK_FETCHED":
            const sortedMatchups = [...state.matchupsToCheck];
            sortedMatchups.sort((a, b) => b.points - a.points);
            const highestScore = {
                rosterId: sortedMatchups[0].roster_id,
                points: sortedMatchups[0].points,
                nflWeekSet: sortedMatchups[0].nflWeek,
            };
            return {
                ...state,
                loading: false,
                highestScoringInfo: {
                    ...highestScore
                },
                highestScoreSet: true,
            }
        case "FETCHING_MATCHUPS_TO_CHECK":
            return {
                ...state,
                loading: true,
            }
        case "MATCHUPS_TO_CHECK_FETCHED":
            let newMatchups = state.matchupsToCheck.concat(action.matchups);
            return {
                ...state,
                matchupsToCheck: newMatchups,
            }
        default:
            return {
                ...state,
            }
    }
}

export default HighestScoringWeekReducer;