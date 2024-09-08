import React from 'react'

const NavLink = ({linkInfo}) => {
    console.log(linkInfo)
    const {to, label} = linkInfo;

    return (
        <a href={to} className="text-white">{label}</a>
    )
};

export default NavLink;