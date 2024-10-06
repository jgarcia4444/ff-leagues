
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";
import NFLStateReducer from "./NFLStateReducer/NFLStateReducer";
import RostersReducer from "./RostersReducer/RostersReducer";
import UsersReducer from "./UsersReducer/UsersReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
    NflState: NFLStateReducer,
    Rosters: RostersReducer,
    Users: UsersReducer,
});

export default rootReducer;