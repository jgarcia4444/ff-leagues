import React from 'react'

import SectionTitle from '../../../shared/Titles/SectionTitle';
import MostPointsFor from './MostPointsFor/MostPointsFor';
import TopSeed from './TopSeed/TopSeed';
import LongestWinStreak from './LongestWinStreak/LongestWinStreak';

import HighestScoringWeek from './HighestScoringWeek/HighestScoringWeek';

const Awards = () => {

    return (
        <section>
            <SectionTitle text={"Awards"} />
            <div className="w-full flex flex-row gap-8 overflow-x-auto pb-2 ">
                <MostPointsFor />
                <TopSeed />
                <LongestWinStreak />
                <HighestScoringWeek />
            </div>
        </section>
    )
};

export default Awards;