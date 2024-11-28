import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";


import NavLink from './NavLink/NavLink';
import LogoNavLink from './LogoNavLink/LogoNavLink';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const Nav = () => {

    const {width} = useWindowDimensions();

    const links = [
        {label: "Matchups", to: "/matchups"},
        {label: "Standings", to: "/standings"},
    ]
    const renderNavLinks = () => {
        return links.map((link, i) => <NavLink linkInfo={link} key={`${link.label}-${i}`} />);
    }

    const mobileNav = () => {
        return (
            <div className="relative">

            </div>
        )
    };

    const nav = () => {
        return (
            <div className="flex flex-row gap-10">
                {renderNavLinks()}
            </div>
        )
    }

    const renderNav = () => {
        if (width < 688) {
            return mobileNav();
        } else {
            return nav();
        }
    }

    return (
        <section className="flex flex-row w-full justify-between items-center">
            <LogoNavLink />
            {renderNav()}
        </section>
    )
}

export default Nav;