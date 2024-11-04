const initialState = {
    matchupsToCheck: [],
    loading: false,
    highestScoringInfo: {
        rosterId: null,
        points: 0,
        nflWeekSet: 0
    },
    infoSet: false,
};

// Initially get all matchup info from previous weeks.
// set info for the highest scoring week
// {roster_id, points, nfl_week_set}

const HighestScoringWeekReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MATCHUPS_TO_CHECK_FETCHED":
            console.log("MATCHUPS TO CHECK FROM THE REDUCER", action.matchupsToCheck)
            let sortedMatchups = action.matchupsToCheck.sort((a, b) => b.points - a.points)[0];
            console.log("SORTED MATCHUPS", sortedMatchups);
            let highestScoringMatchup = sortedMatchups[0];
            let scoringInfo = {
                rosterId: highestScoringMatchup.roster_id,
                points: highestScoringMatchup.points,
                nflWeekSet: highestScoringMatchup.nflWeek

            }
            return {

            }
        default:
            return {
                ...state,
            }
    }
}

export default HighestScoringWeekReducer;