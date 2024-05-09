import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  
  const bots = props.bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} botFunction={props.removeBot}/>
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
          {bots}
          <h3>{bots.name}</h3>
              
          {bots.length === 0 ? <h1>Bot Army</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;