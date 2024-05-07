import React, { useState } from 'react';
import BotCollection from './component/botCollection';
import YourBotArmy from './component/yourBotArmy';
import BotSpecs from './component/botSpecs';
import SortBar from './component/sortBar';

const App = () => {
  const [bots, setBots] = useState([]);// state to store list of bots
  const [army, setArmy] = useState([]);

    // Function to handle sorting of bots
    const handleSort = (criteria) => {
      // Sort the bots array based on the selected criteria
      const sortedBots = [...bots].sort((a, b) => {
        return a[criteria] - b[criteria];
      });
  
      setBots(sortedBots);
    };
    const handleEnlist = (bot) => {
    // Add the bot to the army state
    setArmy([...army, bot]);
  };
  const handleRelease = (bot) => {
    // Filter out the released bot from the army state
    const updatedArmy = army.filter(b => b.id !== bot.id);
    setArmy(updatedArmy);};
 