import React from 'react'

const NavLink = ({linkInfo}) => {

    const {to, label} = linkInfo;

    return (
        <a href={to} className="">{label}</a>
    )
};

export default NavLink;