import React from 'react';

const BotSpecs = ({ bot, onEnlist }) => {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  return (
    <div>
      <h2>Bot Specs</h2>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button onClick={handleEnlist}>Enlist</button>
      </div>
    </div>
  );
};

export default BotSpecs;
