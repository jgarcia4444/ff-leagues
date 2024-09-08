import React from 'react';

import Nav from '../components/Nav/Nav';

const Layout = ({children}) => {

    return (
        <main className="flex flex-col p-2 bg-slate-600 w-full h-screen text-white">
            <Nav />
            {children}
        </main>
    )
}

export default Layout;