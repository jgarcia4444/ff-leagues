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
            console.log(sortedMatchups)
            const highestScore = {
                rosterId: sortedMatchups[0].roster_id,
                points: sortedMatchups[0].points,
                nflWeekSet: sortedMatchups[0].nflWeek,
            };
            return {
                ...state,
                loading: false,
                highestScoringInfo: {
                    ...highestScore,
                    highestScoreSet: true,
                },
                highestScoreSet: true,
            }
        case "FETCHING_MATCHUPS_TO_CHECK":
            return {
                ...state,
                loading: true,
            }
        case "MATCHUPS_TO_CHECK_FETCHED":
            return {
                ...state,
                matchupsToCheck: [...state.matchupsToCheck, ...action.matchups],
            }
        default:
            return {
                ...state,
            }
    }
}

export default HighestScoringWeekReducer;