import React from 'react';

import Urls from '../../../config/Urls';

const HomeHeader = ({leagueInfo}) => {

    const {avatarUrl} = Urls;

    const {name, avatar} = leagueInfo;

    return (
        <div className="">
            <img src={`${avatarUrl}${avatar}`} alt="" className="w-1/4 rounded" />
            <h3 className="text-xl text-bold">{name}</h3>
        </div>
    )
}

export default HomeHeader