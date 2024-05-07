import React from "react";
const BotData=({bot,onRemove})=>{
    const handleRelease=()=>{// call the onRemove function
       
        onRemove(bot.id)
    }
    return(
        <div className='bot-data'>
            <h3>name :{bot.name}</h3>
            <p>type :{bot.type}</p>
            <p>defense :{bot.defense}</p>
            <p>health:{bot.health}</p>
            <button onClick={handleRelease}>Release</button>
        </div>
    )}
    export default BotData;
