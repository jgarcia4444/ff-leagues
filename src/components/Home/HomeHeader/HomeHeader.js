import React from 'react';

import Urls from '../../../config/Urls';

const HomeHeader = ({leagueInfo}) => {

    const {avatarUrl} = Urls;

    const {name, avatar} = leagueInfo;

    return (
        <div className="w-full flex flex-col md:flex-row items-center mt-4">
            <img src={`${avatarUrl}${avatar}`} alt="" className="w-3/4 md:w-1/3 rounded " />
            <div className="md:w-1/2 md:p-6 w-full mx-auto">
                <h3 className="text-6xl font-bold text-left text-slate-500">{name}</h3>
            </div>
        </div>
    )
}

export default HomeHeader