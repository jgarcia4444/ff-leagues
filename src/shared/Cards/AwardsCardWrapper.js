import React from 'react';

const AwardsCardWrapper = ({children}) => {

    return (
        <div className="w-2/3 md:w-1/4 shrink-0 md:shrink-1">
            {children}
        </div>
    )
}

export default AwardsCardWrapper;