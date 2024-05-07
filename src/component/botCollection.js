// BotCollection.js
import React, { useState, useEffect } from 'react';

const BotCollection = ({onBotClick }) => {
  const [bots, setBots] = useState([]);
//fetched data from the API
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
      
  }, []);
  return (
    <div>
      <h2>Bot Collection3</h2>
      <div className="bot-collection">
        {bots.map(bot => ( //iterate over bot collection
           <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>

             <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
