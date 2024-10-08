
const initialState = {
    loading: false,
    users: [],
    error: "",
}

const UsersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCHING_USERS':
            return {
                ...state,
                loading: true
            }
        case 'USERS_FETCHED':
            return {
                ...initialState,
                users: action.users
            }
        case 'USERS_FETCH_ERROR':
            return {
                ...initialState,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export default UsersReducer