import React from 'react';

import Nav from '../components/Nav/Nav';

const Layout = ({children}) => {

    return (
        <main className="flex flex-col p-4 bg-slate-600 w-full items-center text-white w-full">
            <Nav />
            {children}
        </main>
    )
}

export default Layout;