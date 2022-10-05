import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import Homepage from '../Components/Homepage';
import '@testing-library/jest-dom/extend-expect';

describe('Test Coins', () => {
  it('Renders coins correctly', () => {
    const list = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });
});
