import React from 'react'

import logo from '../../../media/League-of-memers.png';

const LogoNavLink = () => {

    return (
        <a href="/" className="">
            <img src={logo} alt="" className="w-24 h-24 rounded-full" />
        </a>
    )
};

export default LogoNavLink;