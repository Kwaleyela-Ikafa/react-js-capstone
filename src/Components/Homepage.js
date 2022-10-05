import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCoins from '../Redux/api';
import Coin from './coin';
import { setCoins } from '../Redux/Coins';
import Navbar from './Navbar';

const Homepage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const initialData = async () => {
    const data = await fetchCoins();
    dispatch(setCoins(data));
  };
  if (coins.length < 1) {
    initialData();
    return (
      <div className="text-center">
        <div className=" text-center p-4 spinner-grow text-light" role="status" />
      </div>
    );
  }

  return (
    <section>
      <Navbar />
      <div className=" grid md:grid-cols-4 sm:grid-cols-2  grid-cols-2 ">
        {coins.map((coin) => (
          <Coin key={coin.uuid} coin={coin} />
        ))}
      </div>
    </section>
  );
};

export default Homepage;
