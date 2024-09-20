
const initialState = {
    matchups: [],
    loading: false,
}

const MatchupsReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default MatchupsReducer;