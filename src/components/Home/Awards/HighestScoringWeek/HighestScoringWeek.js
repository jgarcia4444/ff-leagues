import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const HighestScoringWeek = () => {

    return (
        <div className="">

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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HighestScoringWeek);