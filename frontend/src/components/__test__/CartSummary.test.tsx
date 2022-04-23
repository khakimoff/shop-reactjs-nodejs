/* eslint-disable */
import { render, screen } from '@testing-library/react';
import CartSummary from '../CartSummary/CartSummary';

const items = [
  {
    id: 1, title: 'sweater', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: { rate: 3.9, count: 120 },
  },
];

describe('CartSummary component', () => {
  it('CartSummary renders', () => {
    render(
      <CartSummary items={items} />,
    );
    expect(screen.getByRole('button'));
    expect(screen.getByText(/Coupon:/));
    expect(screen.getByText(/PCS/));
    expect(screen.getByText(/Total:/));
    expect(screen.getByText(/Enter your email/));
    expect(screen.getByText(/Enter your phone/));
    expect(screen.getByText(/0/));
    expect(screen.getByText(/Buy/));
    expect(screen.getByLabelText(/Enter your email/));
    expect(screen.getByLabelText(/Enter your phone/));
    expect(screen.getByPlaceholderText(/Email/));
    expect(screen.getByPlaceholderText(/Phone/));
    // screen.debug()
  });

  it('CartSummary snapshot', () => {
    const cartSummary = render(
      <CartSummary items={items} />,
    );
    expect(cartSummary).toMatchSnapshot();
  });
});
