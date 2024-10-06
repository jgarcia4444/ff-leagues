import Urls from "../../../config/Urls";
const {users} = Urls;

const fetchUsers = () => {
    return async dispatch => {
        dispatch({type: 'FETCHING_USERS'});
        fetch(users)
            .then(res => res.json())
            .then(data => {
                return dispatch({type: 'USERS_FETCHED', users: data});
            })
            .catch(err => {
                return dispatch({type: "USERS_FETCH_ERROR", error: err});
            })
    }
}

export default fetchUsers;