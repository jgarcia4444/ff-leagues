import React from 'react';

import Urls from '../../../config/Urls';

const HomeHeader = ({leagueInfo}) => {

    const {avatarUrl} = Urls;

    const {name, avatar} = leagueInfo;

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <img src={`${avatarUrl}${avatar}`} alt="" className="w-1/3 rounded shadow-lg" />
            <h3 className="text-4xl text-bold">{name}</h3>
        </div>
    )
}

export default HomeHeader