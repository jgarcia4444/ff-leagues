
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";
import NFLStateReducer from "./NFLStateReducer/NFLStateReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
    NflState: NFLStateReducer,
});

export default rootReducer;