
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";
import NFLStateReducer from "./NFLStateReducer/NFLStateReducer";
import RostersReducer from "./RostersReducer/RostersReducer";
import UsersReducer from "./UsersReducer/UsersReducer";
import LeagueReducer from "./LeagueReducer/LeagueReducer";
import HighestScoringWeekReducer from "./HighestScoringWeekReducer/HighestScoringWeekReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
    NflState: NFLStateReducer,
    Rosters: RostersReducer,
    Users: UsersReducer,
    League: LeagueReducer,
    HighestScoringWeek: HighestScoringWeekReducer,
});

export default rootReducer;