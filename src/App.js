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
  
  
 