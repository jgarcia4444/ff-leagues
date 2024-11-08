import React from 'react'

import SectionTitle from '../../../shared/Titles/SectionTitle';
import MostPointsFor from './MostPointsFor/MostPointsFor';
import TopSeed from './TopSeed/TopSeed';
import LongestWinStreak from './LongestWinStreak/LongestWinStreak';

import Urls from '../../../config/Urls';
import HighestScoringWeek from './HighestScoringWeek/HighestScoringWeek';

const Awards = () => {

    const {nflStateUrl} = Urls;

    // REGULAR SEASON AWARDS
    // Highest Scoring Week => Can We Get Much Higher?

    return (
        <section>
            <SectionTitle text={"Awards"} />
            <div className="w-full flex flex-row gap-4 overflow-x-auto ">
                <MostPointsFor />
                <TopSeed />
                <LongestWinStreak />
                <HighestScoringWeek />
            </div>
        </section>
    )
};

export default Awards;