
const initialState = {
    matchups: [],
    loading: false,
    matchupsConfigured: false,
}

const addRosterProps = (matchups, dataToAdd) => {
    let i = 0;
    let matchupsWithAddedProperties = [];
    while (i < dataToAdd.length) {
        let propsToAdd = dataToAdd[i];
        let matchupToChange = matchups.filter(matchup => matchup.roster_id === propsToAdd.roster_id)[0];
        let newMatchup = {
            ...matchupToChange,
            ...propsToAdd
        }
        matchupsWithAddedProperties.push(newMatchup);
        i += 1;
    }
    return matchupsWithAddedProperties;
}

const addUsersProps = (matchups, usersData) => {
    let i = 0;
    let newMatchups = [];
    while (i < usersData.length) {
        let userData = usersData[i];
        let matchupToChange = matchups.filter(matchup => matchup.owner_id === userData.user_id)[0];
        let dataToAddFromUserData = {
            avatar_id: userData.avatar,
            teamName: userData.metadata.team_name,
            displayName: userData.display_name
        }
        let newMatchup = {
            ...matchupToChange,
            ...dataToAddFromUserData,
        }
        newMatchups.push(newMatchup)
        i += 1;
    }
    return newMatchups;
}

const MatchupsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MATCHUPS_CONFIGURED":
            let newMatchups = addUsersProps(state.matchups, action.userData)
            return {
                ...state,
                matchupsConfigured: true,
                matchups: newMatchups,
            }
        case "ROSTER_PROPERTIES_FETCHED":
            let rosterPropsMatchups = addRosterProps(state.matchups, action.dataToAdd);
            return {
                ...state,
                loading: false,
                matchups: rosterPropsMatchups,
            }
        case "CONFIGURING_MATCHUPS":
            return {
                ...state,
                loading: true,
            }
        case "FETCHING_MATCHUPS":
            return {
                ...state,
                loading: true,
            }
        case "MATCHUPS_FETCHED":
            return {
                ...state,
                matchups: action.matchups,
            }
        default:
            return {
                ...state,
            }
    }
}

export default MatchupsReducer;