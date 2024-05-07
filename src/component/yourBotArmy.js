import React from 'react';
import BotData from './BotData'; 

const YourBotArmy = ({ enlistedBots, releaseBot }) => { //  object destructuring for props

  return (
    <div className='bot-army'>
        <h2>Your BOT Army</h2>
        {enlistedBots.map(bot => (
        <div key={bot.id}>
          <BotData bot={bot} onRemove={releaseBot} />
        </div>
      ))}
    </div>
  );
}
    
export default YourBotArmy;
