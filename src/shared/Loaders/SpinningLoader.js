import React from 'react';

import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

const SpinningLoader = () => {

    return (
        <div className="w-1/2 margin-x-auto relative mb-12">
            <div className="absolute left-1/2 w-10 h-10 bg-transparent border-4 border-white border-opacity-30 rounded-full"></div>
            <AiOutlineLoading className="absolute left-1/2 animate-spin transition-all h-10 w-10" color={'#fff'} />
        </div>
    )
}

export default SpinningLoader;