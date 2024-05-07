import React from "react";
const BotData=({bot,onRemove})=>{
    const handleRelease=()=>{// calll the remove function
        onRemove(bot.id)
    }
}