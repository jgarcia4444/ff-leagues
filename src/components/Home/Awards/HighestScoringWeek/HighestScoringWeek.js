import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
import fetchMatchupsToCheck from '../../../../redux/actions/awards/fetchMatchupsToCheck';
import getNflState from '../../../../redux/actions/nflState/getNflState';
import Urls from '../../../../config/Urls';
const {matchupsUrl} = Urls;

const HighestScoringWeek = ({getNflState, nflWeek, HighestScoringWeek, fetchMatchupsToCheck}) => {

    const {highestScoringInfo} = HighestScoringWeek;
    const {highestScoreSet} = highestScoringInfo;

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

    return (
        <div className="w-full md:w-1/4">
            <AwardsTitle text={"Highest Score"} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nflWeek: state.NflState.nflWeek,
        HighestScoringWeek: state.HighestScoringWeek,
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