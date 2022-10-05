import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCoins from '../Redux/api';
import CoinChart from './CoinChart';
import NavDetails from './NavDetails';

const CoinDetails = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const coinDetail = coins.find((coin) => coin.uuid === coinId);
  useEffect(() => {
    if (coinDetail.length <= 0) dispatch(fetchCoins());
  }, []);
  return (
    <>
      <NavDetails coin={coinDetail} />
      <div className="bg-blue flex justify-center">
        <CoinChart />
      </div>
      <main className="flex flex-col items-center p-5 ">
        <section className="bg-blue text-white  p-3 border rounded shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div> Name  </div>
          <div>
            {' '}
            {coinDetail.name}
            {' '}
          </div>
        </section>
        <section className="bg-blue text-white  p-3 border rounded shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div> Symbol  </div>
          <div>
            {' '}
            {coinDetail.symbol}
            {' '}
          </div>
        </section>
        <section className="bg-blue text-white  p-3 border rounded shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div> Market Cap  </div>
          <div>
            {' '}
            {coinDetail.marketCap}
            {' '}
          </div>
        </section>
        <section className="bg-blue text-white  p-3 border rounded shadow-md flex w-full md:w-6/12 mb-5 justify-between">
          <div> Change  </div>
          <div>
            {' '}
            {coinDetail.change}
            %
            {' '}
          </div>
        </section>
      </main>
    </>
  );
};

export default CoinDetails;
