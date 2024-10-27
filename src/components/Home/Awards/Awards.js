import React from 'react'

import SectionTitle from '../../../shared/Titles/SectionTitle';
import MostPointsFor from './MostPointsFor/MostPointsFor';
import TopSeed from './TopSeed/TopSeed';
import LongestWinStreak from './LongestWinStreak/LongestWinStreak';

import Urls from '../../../config/Urls';

const Awards = () => {

    const {nflStateUrl} = Urls;

    // REGULAR SEASON AWARDS
    // Highest Scoring Week => Can We Get Much Higher?
    // Longest Win Streek => Run Forrest Run

    return (
        <section>
            <SectionTitle text={"Awards"} />
            <div className="w-full flex flex-row gap-4">
                <MostPointsFor />
                <TopSeed />
                <LongestWinStreak />
            </div>
        </section>
    )
};

export default Awards;