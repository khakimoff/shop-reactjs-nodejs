/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ProductItemsComp from '../ProductItem/ProductItems';

const products = [
  {
    id: 1, title: 'sweater', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: { rate: 3.9, count: 120 },
  },
];

describe('ProuctListItem component', () => {
  it('ProuctListItem renders', () => {
    render(
      <Provider store={store}>
        <ProductItemsComp products={products} />
      </Provider>,
    );
    // check by elements
    expect(screen.getByRole('list'));
    expect(screen.getByRole('button'));
    expect(screen.getByRole('img'));
    expect(screen.getByText(/Total:/));
    expect(screen.getByText(/sweater/));
    expect(screen.getByText(/109.95/));
    expect(screen.getByText(/Add to cart/));
  });

  it('ProductItemsComp snapshot', () => {
    const list = render(
      <Provider store={store}>
        <ProductItemsComp products={products} />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });
});
