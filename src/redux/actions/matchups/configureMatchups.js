import Urls from "../../../config/Urls";
const {rosters, users} = Urls;

const selectRosterProperties = data => {
    return data.map(item => {
        const {settings, owner_id, roster_id} = item;
        return {
            settings,
            owner_id,
            roster_id,
        }
    })
}

const configureMatchups = () => {
    return async dispatch => {
        dispatch({type: "CONFIGURING_MATCHUPS"});
        fetch(rosters)
            .then(res => res.json())
            .then(data => {
                const rosterPropertiesToAdd = selectRosterProperties(data)
                dispatch({type: "ROSTER_PROPERTIES_FETCHED", dataToAdd: rosterPropertiesToAdd});
                fetch(users)
                    .then(res => res.json())
                    .then(userData => {
                        setTimeout(() => {
                            return dispatch({type: "MATCHUPS_CONFIGURED", userData});
                        }, 250)
                    })
            })
    }
}

export default configureMatchups;