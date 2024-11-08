import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
import fetchMatchupsToCheck from '../../../../redux/actions/awards/fetchMatchupsToCheck';
import getNflState from '../../../../redux/actions/nflState/getNflState';
import Urls from '../../../../config/Urls';
import AwardsCard from '../../../../shared/Cards/AwardsCard';
const {matchupsUrl} = Urls;

const HighestScoringWeek = ({getNflState, nflWeek, HighestScoringWeek, fetchMatchupsToCheck, rosters, users}) => {

    const {highestScoringInfo, loading, highestScoreSet} = HighestScoringWeek;

    const getAllMatchups = () => {
        let matchupUrls = [];
        let i = nflWeek;
        while (i > 0) {
            let url = `${matchupsUrl}${i}`;
            matchupUrls.push(url);
            i -= 1;
        }
        matchupUrls.forEach(url => fetchMatchupsToCheck(url));
    }

    useEffect(() => {
        if (nflWeek === 0) {
            getNflState(); 
        } else {
            if (highestScoreSet === false) {
                getAllMatchups();
            } else {
                console.log("Highest scoring info", highestScoringInfo);
            }
        }
    },[nflWeek])

    const presentAwardCard = () => {
        console.log("HERE ARE THE ROSTERS", rosters);
        const roster = rosters.filter(rosterInfo => rosterInfo.roster_id === highestScoringInfo.rosterId)[0];
        console.log("Here is the roster information", roster);
        const user = users.filter(userInfo => userInfo.user_id === roster.owner_id)[0];
        console.log("user info from the highest scoring week component.", user);
        return <AwardsCard user={user} awardType='HIGHEST_SCORING_WEEK' extraValue={highestScoringInfo.points} />
    }

    return (
        <div className="w-full md:w-1/4 shrink-0 md:shrink-1">
            <AwardsTitle text={"Highest Score"} />
            {(loading === false && highestScoreSet === true) && presentAwardCard()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nflWeek: state.NflState.nflWeek,
        HighestScoringWeek: state.HighestScoringWeek,
        rosters: state.Rosters.rosters,
        users: state.Users.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMatchupsToCheck: (fetchUrl) => dispatch(fetchMatchupsToCheck(fetchUrl)),
        getNflState: () => dispatch(getNflState()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighestScoringWeek);