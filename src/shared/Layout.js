import React from 'react';

import Nav from '../components/Nav/Nav';

const Layout = ({children}) => {

    return (
        <main className="flex flex-col">
            <Nav />
            {children}
        </main>
    )
}

export default Layout;