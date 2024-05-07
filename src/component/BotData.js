import React from "react";
const BotData=({bot,onRemove})=>{
    const handleRelease=()=>{// calll the remove function
       
        onRemove(bot.id)
    }
    return(
        <div className='bot-data'>
            <h3>{bot.name}</h3>
            <p>{bot.type}</p>
            <p>{bot.attack}</p>
            <p>{bot.defense}</p>
            <p>{bot.speed}</p>
            <button onClick={handleRelease}>Release</button>
        </div>
    )