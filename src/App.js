import React, { useState } from 'react';
import BotCollection from './component/botCollection';
import YourBotArmy from './component/yourBotArmy';
import BotSpecs from './component/botSpecs';
import SortBar from './component/sortBar';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Function to handle enlistment of a bot
  const handleEnlist = (bot) => {
    // Check if the bot is already enlisted
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]); // Add the bot to the army
    }
  };

  // Function to handle releasing a bot from the army
  const handleRelease = (bot) => {
    const updatedArmy = army.filter(b => b.id !== bot.id); // Remove the bot from the army
    setArmy(updatedArmy);
  };

  // Function to handle selecting a bot to view its specs
  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  // Function to handle sorting bots by criteria (health, damage, armor)
  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]); // Sort the bots array
    setBots(sortedBots);
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection bots={bots} onEnlist={handleEnlist} />
        <YourBotArmy army={army} onRelease={handleRelease} />
        {selectedBot ? (
          <BotSpecs bot={selectedBot} onEnlist={handleEnlist} />
        ) : null}
        <SortBar onSort={handleSort} />
      </div>
    </div>
  );
};

export default App;
