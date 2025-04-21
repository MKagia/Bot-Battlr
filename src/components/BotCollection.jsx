
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onClick={enlistBot}
          showDischarge={false}
        />
      ))}
    </div>
  );
}

export default BotCollection;

// console.log(BotCard);