import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotFilters from './components/BotFilters';
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(err => console.error('Error deleting bot:', err));
  };

  const getFilteredAndSortedBots = () => {
    let filtered = [...bots];

    if (filterBy) {
      filtered = filtered.filter(bot => bot.bot_class === filterBy);
    }

    if (searchQuery) {
      filtered = filtered.filter(bot =>
        bot.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return filtered;
  };

  return (
    <div className="container text-start p-5">
      <h1 className="my-4">Bot Army</h1>

      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />

      <BotFilters
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <p className="container-1 text-center p-5"><strong>List of Bots</strong></p>
      <BotCollection bots={getFilteredAndSortedBots()} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
