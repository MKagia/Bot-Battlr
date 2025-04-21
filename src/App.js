
import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import "./App.css"; 

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(setBots)
      .catch(err => console.error('Error fetching bots:', err));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`,
       { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(err => console.error('Error deleting bot:', err));
  };

  return (
    <div className="container text-start p-5 ">
      <h1 className="my-4">Bot Army Recruitment</h1>
      <p>Welcome to <strong>Bot Battlr</strong>, the one and only spot in the known universe where you can custom build your own Bot Army! </p>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <p className="container-1 text-center p-5 "><strong>List of Bots</strong></p>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      
    </div>
  );
}

export default App;