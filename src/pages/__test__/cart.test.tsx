/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from '../cart';
import store from '../../redux/store';

describe('Cart component', () => {
  it('Cart renders without products', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    expect(screen.getByText(/Your shopping cart is empty/));
  });

  it('Cart snapshot', () => {
    const cart = render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    expect(cart).toMatchSnapshot();
  });
});
