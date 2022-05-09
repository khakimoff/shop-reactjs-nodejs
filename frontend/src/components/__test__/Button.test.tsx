import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button/Button';

const onClick = jest.fn();

describe('Button component', () => {
  it('Button renders', () => {
    render(
      <Button title="Add to cart" onClick={onClick} />,
    );
    expect(screen.getByRole('button'));
    expect(screen.getByText('Add to cart'));
    expect(screen.getByRole('button').focus());
  });

  it('onClick works', () => {
    render(
      <Button title="Add to cart" onClick={onClick} />,
    );
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('Button snapshot', () => {
    const button = render(
      <Button title="Add to cart" onClick={onClick} />,
    );
    expect(button).toMatchSnapshot();
  });
});
