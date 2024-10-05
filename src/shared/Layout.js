import React from 'react';

import Nav from '../components/Nav/Nav';

const Layout = ({children}) => {

    return (
        <main className="flex flex-col p-4 bg-slate-600 w-full items-center text-white h-screen overflow-y-scroll">
            <Nav />
            {children}
        </main>
    )
}

export default Layout;