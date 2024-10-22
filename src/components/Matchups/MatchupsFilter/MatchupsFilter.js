import React from 'react';

const MatchupsFilter = ({matchupsChosen, handleChange}) => {

    const buttonBaseClass = "w-1/2 text-xs text-center font-bold transition-all duration-300 py-2 hover:cursor-pointer hover:scale-105";

    const activeClass = "bg-slate-400 text-slate-900 underline";
    const inactiveClass = "bg-slate-800 text-slate-500";

    return (
        <div className="w-44 rounded flex flex-row">
            <div onClick={() => handleChange(true)} className={`rounded-l ${buttonBaseClass} ${matchupsChosen === true ? activeClass : inactiveClass}`}>Head 2 Head</div>
            <div onClick={() => handleChange(false)} className={`rounded-r ${buttonBaseClass} ${matchupsChosen === false ? activeClass : inactiveClass}`}>Battle Royale</div>
        </div>
    )
}

export default MatchupsFilter;