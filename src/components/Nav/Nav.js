
import React from 'react';
import NavLink from './NavLink/NavLink';

const Nav = () => {

    const links = [
        {label: "Matchups", to: "/matchups"},
        {label: "Standings", to: "/standings"}
    ]
    const renderNavLinks = () => {
        return links.map((link, i) => <NavLink linkInfo={link} key={`${link.label}-${i}`} />);
    }

    return (
        <section className="flex flex-row w-full justify-end gap-10">
            {/* logoNavLink */}
            {renderNavLinks()}
        </section>
    )
}

export default Nav;