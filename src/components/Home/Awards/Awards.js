import React from 'react'

import SectionTitle from '../../../shared/Titles/SectionTitle';
import MostPointsFor from './MostPointsFor/MostPointsFor';

import Urls from '../../../config/Urls';

const Awards = () => {

    const {nflStateUrl} = Urls;

    // REGULAR SEASON AWARDS
    // Most points for => The Rich Get Richer
    // 1 Seed => It's Lomnely at the Top Award
    // Highest Scoring Week => Can We Get Much Higher?
    // Longest Win Streek => Run Forrest Run

    return (
        <section>
            <SectionTitle text={"Awards"} />
            <div className="w-full flex flex-row">
                <MostPointsFor />
            </div>
        </section>
    )
};

export default Awards;