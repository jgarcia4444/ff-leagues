import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
import fetchMatchupsToCheck from '../../../../redux/actions/awards/fetchMatchupsToCheck';

const HighestScoringWeek = ({nflWeek, HighestScoringWeek, fetchMatchupsToCheck}) => {

    const {highestScoringInfo} = HighestScoringWeek;
    const {nflWeekSet} = highestScoringInfo;

    useEffect(() => {
        fetchMatchupsToCheck(nflWeekSet, nflWeek);
    })

    return (
        <div className="">
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
        fetchMatchupsToCheck: (from, to) => dispatch(fetchMatchupsToCheck(from, to)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighestScoringWeek);