import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import AwardsTitle from '../../../../shared/Titles/AwardsTitle';
import fetchMatchupsToCheck from '../../../../redux/actions/awards/fetchMatchupsToCheck';
import getNflState from '../../../../redux/actions/nflState/getNflState';

const HighestScoringWeek = ({getNflState, nflWeek, HighestScoringWeek, fetchMatchupsToCheck}) => {

    const {highestScoringInfo} = HighestScoringWeek;
    const {nflWeekSet} = highestScoringInfo;

    const getAllMatchups = () => {
        let i = nflWeek;
        while (i >= 0) {
            fetchMatchupsToCheck(i);
            i -= 1;
        }
    }

    useEffect(() => {
        getAllMatchups() 
    },[])

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
        fetchMatchupsToCheck: (from, to) => dispatch(fetchMatchupsToCheck(from, to)),
        getNflState: () => dispatch(getNflState()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighestScoringWeek);