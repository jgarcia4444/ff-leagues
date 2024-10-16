import React from 'react';

const PageTitle = ({title}) => {
    return (
        <div className="w-full flex flex-row items-start mt-2">
            <h1 className="font-bold text-5xl text-slate-500 ">{title.toUpperCase()}</h1>
        </div>
    )
}

export default PageTitle;
