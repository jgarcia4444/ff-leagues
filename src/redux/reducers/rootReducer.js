
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";
import NFLStateReducer from "./NFLStateReducer/NFLStateReducer";
import RostersReducer from "./RostersReducer/RostersReducer";
import UsersReducer from "./UsersReducer/UsersReducer";
import LeagueReducer from "./LeagueReducer/LeagueReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
    NflState: NFLStateReducer,
    Rosters: RostersReducer,
    Users: UsersReducer,
    League: LeagueReducer
});

export default rootReducer;