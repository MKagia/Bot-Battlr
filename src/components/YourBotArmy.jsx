
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="d-flex flex-wrap justify-content-center mb-4">
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onClick={releaseBot}
          onDischarge={dischargeBot}
          showDischarge={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
