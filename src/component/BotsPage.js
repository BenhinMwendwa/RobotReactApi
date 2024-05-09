import React from "react";
import YourBotArmy from "./yourBotArmy";
import BotCollection from "./botCollection";

function BotsPage() {
  
  const [bots, setBots] = React.useState([])
  const [yourBots, setYourBots] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.npoint.io/2aaa6ab05acdf390cae2/bots/")
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }, []);

  const addBot = (bot) => {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot])
    }
  }

  const removeBot = (bot) => {
    setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy bots={yourBots} removeBot={removeBot} />
      <BotCollection bots={bots} botFunction={addBot} />
    </div>
  )
}

export default BotsPage;