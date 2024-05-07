
import React from "react";

function BotData({ bot, onAdd, onRelease }) {

    const handleAdd = () => {

        console.log('Bot added to army');
      };
    
      // Define function to handle bot release
      const handleRelease = () => {
    
        console.log('Bot released');
      };
    
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h3 className="bot-name">{bot.name}</h3>
      <p className="bot-description">Class: {bot.bot_class}</p>
      <p className="bot-description">Health: {bot.health}</p>
      <p className="bot-description">Damage: {bot.damage}</p>
      <p className="bot-description">Armor: {bot.armor}</p>
      
      <div className="button-container">


        <button onClick={handleAdd}>Add to Army</button>
    
      <button onClick={handleRelease}>Release</button>
      </div>
    </div>
  );
}

export default BotData
