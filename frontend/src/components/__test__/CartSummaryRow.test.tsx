import { render, screen } from '@testing-library/react';
import CartSummaryRow from '../CartSummaryRow/CartSummaryRow';

describe('CartSummaryRow component', () => {
  it('CartSummaryRow renders', () => {
    render(
      <CartSummaryRow title="PCS" sum={17} amount={12} />,
    );
    expect(screen.getByText(/PCS/));
    expect(screen.getByText(/12/));
    expect(screen.getByText(/17/));
  });

  it('CartSummaryRow snapshot', () => {
    const cart = render(
      <CartSummaryRow title="PCS" sum={17} amount={12} />,
    );
    expect(cart).toMatchSnapshot();
  });
});
