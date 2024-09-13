import React from 'react'

const NavLink = ({linkInfo}) => {
    const {to, label} = linkInfo;

    return (
        <a href={to} className="hover:text-white text-slate-300 transition-all duration-300">{label}</a>
    )
};

export default NavLink;