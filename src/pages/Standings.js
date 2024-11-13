import React from 'react';
import { connect } from 'react-redux';

import Layout from '../shared/Layout';
import StandingCard from '../components/Standings/StandingCard/StandingCard';
import PageTitle from '../shared/Titles/PageTitle';

const Standings = ({rosters}) => {

    const renderStandings = () => {
        let sortedStandings = rosters.sort((a, b) => b.standing - a.standing).reverse();
        return sortedStandings.map((roster, i) => <StandingCard key={`${i}-${roster.display_name}`} roster={roster} />)
    }

    return (
        <Layout>
            <PageTitle title={"Standings"} />
            <div className="w-full py-4 pr-2 flex flex-col md:flex-row gap-8 h-120 overflow-y-auto rounded ">
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