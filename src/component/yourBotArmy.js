import React from 'react'

const yourBotArmy = (enlistedBots,releaseBot) => {//pass props

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
    


export default yourBotArmy
