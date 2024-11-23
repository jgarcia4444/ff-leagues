import React from 'react';

import Urls from '../../../config/Urls';

const HomeHeader = ({leagueInfo}) => {

    const {avatarUrl} = Urls;

    const {name, avatar} = leagueInfo;

    return (
        <div className="w-full flex flex-col md:flex-row items-center mt-4">
            <img src={`${avatarUrl}${avatar}`} alt="" className="w-full rounded order-2 md:order-1" />
            <div className="md:w-1/2 md:p-6 w-full mx-auto order-1 md:order-2 z-10">
                <h3 className="text-6xl font-bold text-left text-slate-500">{name}</h3>
            </div>
        </div>
    )
}

export default HomeHeader