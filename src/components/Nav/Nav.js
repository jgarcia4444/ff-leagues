import React from 'react';

import NavLink from './NavLink/NavLink';
import LogoNavLink from './LogoNavLink/LogoNavLink';

const Nav = () => {

    const links = [
        {label: "Matchups", to: "/matchups"},
        {label: "Standings", to: "/standings"},
    ]
    const renderNavLinks = () => {
        return links.map((link, i) => <NavLink linkInfo={link} key={`${link.label}-${i}`} />);
    }

    return (
        <section className="flex flex-row w-full justify-between items-center">
            <LogoNavLink />
            <div className="flex flex-row gap-10">
                {renderNavLinks()}
            </div>
        </section>
    )
}

export default Nav;