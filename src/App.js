import React, { useState } from 'react';
import BotCollection from './component/botCollection';
import YourBotArmy from './component/yourBotArmy';
import BotSpecs from './component/botSpecs';
import SortBar from './component/sortBar';

const App = () => {
  const [bots, setBots] = useState([]);
 