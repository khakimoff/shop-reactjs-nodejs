/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductsList from '../productsList';
import store from '../../redux/store';

describe('ProductsList component', () => {
  it('ProductsList renders', () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    );
    expect(screen.getByText('Products list'));
    expect(screen.getByRole('img'));
  });

  it('ProductsList snapshot', () => {
    const list = render(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });
});
