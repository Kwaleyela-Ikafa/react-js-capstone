const FETCH_COINS = 'FETCH_COINS';
const initialState = [];

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS: {
      return action.payload;
    }
    default: { return state; }
  }
};

export const setCoins = (coins) => ({
  type: FETCH_COINS,
  payload: coins,
});

export const coinsList = (state) => state.coins;

export default coinsReducer;
