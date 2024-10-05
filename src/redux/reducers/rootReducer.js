
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";
import NFLStateReducer from "./NFLStateReducer/NFLStateReducer";
import RostersReducer from "./RostersReducer/RostersReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
    NflState: NFLStateReducer,
    Rosters: RostersReducer
});

export default rootReducer;