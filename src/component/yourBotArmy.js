import React from 'react';

const YourBotArmy = ({ army, onRelease }) => {
  const handleRelease = (bot) => {
    onRelease(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="army-list">
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => handleRelease(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
