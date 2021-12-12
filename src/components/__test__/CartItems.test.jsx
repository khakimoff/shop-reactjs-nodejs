/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CartItems from '../CartItems';

const cartItems = [
  {
    id: 1, title: 'sweater', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: { rate: 3.9, count: 120 },
  },
];

describe('CartItems component', () => {
  it('CartItems renders', () => {
    render(
      <Provider store={store}>
        <CartItems items={cartItems} />
      </Provider>,
    );
    expect(screen.getByRole('list'));
    expect(screen.getByRole('img'));
    expect(screen.getByAltText('product'));
    expect(screen.getByLabelText('Delete'));
    expect(screen.getByText('sweater'));
  });

  it('CartItems snapshot', () => {
    const cart = render(
      <Provider store={store}>
        <CartItems items={cartItems} />
      </Provider>,
    );
    expect(cart).toMatchSnapshot();
  });
});
