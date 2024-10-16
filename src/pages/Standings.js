import React from 'react';
import { connect } from 'react-redux';

import Layout from '../shared/Layout';
import StandingCard from '../components/Standings/StandingCard/StandingCard';
import PageTitle from '../shared/Titles/PageTitle';

const Standings = ({rosters}) => {

    const renderStandings = () => {
        return rosters.map((roster, i) => <StandingCard key={`${i}-${roster.display_name}`} roster={roster} />)
    }

    return (
        <Layout>
            <PageTitle title={"Standings"} />
            <div className="">
                {renderStandings()}
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        rosters: state.Rosters.rosters,
    }
}

export default connect(
    mapStateToProps,
    null
)(Standings);