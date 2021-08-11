import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Coin } from './components/Coin';


const App = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto bg-gray-200 ">
      <div className="flex flex-col flex-wrap bg-gray-900 py-20 justify-items-center items-center shadow-lg">
        <h1 className="text-white font-bold text-7xl">Crypto Tracker App</h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="text-2xl w-96 rounded-full mt-10 px-6 py-2 border-none focus-none"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>

      <ul className="container mx-auto flex flex-row flex-wrap mt-6 justify-center align-center">
        {
          filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volumen={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.total_volume}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
