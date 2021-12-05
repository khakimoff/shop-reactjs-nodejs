/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input component', () => {
  it('Input renders', () => {
    render(
      <Input
        title="Enter your email"
        type="email"
        placeholder="email..."
        htmlFor="Email"
        size={23}
        ariaRequired
      />,
    );
    expect(screen.getByRole('textbox').focus());
    expect(screen.getByPlaceholderText('email...'));
    expect(screen.getByLabelText('Enter your email'));
    // screen.debug()
  });

  it('Input snapshot', () => {
    const input = render(
      <Input
        htmlFor="Phone "
        type="tel"
        ariaRequired
        size={23}
        title="Enter your phone"
        placeholder="Phone"
      />,
    );
    expect(input).toMatchSnapshot();
  });
});
