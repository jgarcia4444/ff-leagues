import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () => {

    const links = [
        {label: "", to: "/matchups"},
        {label: "", to: "/standings"}
    ]
    const renderNavLinks = () => {
        return links.map((link, i) => <NavLink linkInfo={link} key={`${link.label}-${i}`} />);
    }

    return (
        <section className="flex flex-row">
            {renderNavLinks()}
        </section>
    )
}

export default Nav;