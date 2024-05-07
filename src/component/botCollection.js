import React from 'react';

const BotCollection = ({ bots, onBotClick, onEnlist }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => onEnlist(bot)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
