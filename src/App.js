import React, { useState, useEffect } from 'react';
import BotCollection from './component/botCollection';
import YourBotArmy from './component/yourBotArmy';
import SortBar from './component/sortBar';
import BotData from './component/BotData';
import './style.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    // Fetch bots data from API
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []); 

  const handleEnlist = (bot) => {
    if (!enlistedBots.find(b => b.bot_class === bot.bot_class)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };
  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => a[criteria] - b[criteria]);
    setBots(sortedBots);
    };
    
  const handleRelease = (botId) => {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== botId));
  };

  const handleDischarge = (botId) => {
    
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== botId));
  
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete bot from backend');
      }
    })
    .catch(error => console.error('Error deleting bot:', error));
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      <h1>Bot System</h1>
      {selectedBot ? (
        <BotData bot={selectedBot} onEnlist={handleEnlist} onBackToList={handleBackToList} 
        onAdd={handleEnlist} onRelease={handleRelease} />
      ) : (
        <>
        <SortBar onSort={handleSort} />
          <BotCollection bots={bots} onBotClick={handleBotClick} onEnlist={handleEnlist} />
          <YourBotArmy enlistedBots={enlistedBots} onRelease={handleRelease} onDischarge={handleDischarge} />
        </>
      )}
    </div>
  );
};

export default App;
