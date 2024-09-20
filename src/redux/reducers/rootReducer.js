
import { combineReducers } from "redux";

import MatchupsReducer from "./MatchupsReducer/MatchupsReducer";

const rootReducer = combineReducers({
    Matchups: MatchupsReducer,
});

export default rootReducer;