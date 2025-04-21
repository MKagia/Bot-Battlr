import React from 'react';
import { Card, Button } from 'react-bootstrap';
function BotCard({ bot, onClick, onDischarge, showDischarge }) {
  return (
    <Card onClick={() => onClick(bot)} style={{ width: '12rem', margin: '10px', cursor: 'pointer' }}>
      <Card.Img variant="top" src={bot.avatar_url} />
      <Card.Body>
        <Card.Title>{bot.name}</Card.Title>
        <Card.Text>
          {bot.catchphrase}
          <br />
          ❤️ {bot.health} ⚡ {bot.damage} 🛡️ {bot.armor}
        </Card.Text>
        {showDischarge &&
          <Button
            variant="danger"
            onClick={(e) => {
              e.stopPropagation();
              onDischarge(bot);
            }}>
            x
          </Button>
        }
      </Card.Body>
    </Card>
  );
}

export default BotCard;