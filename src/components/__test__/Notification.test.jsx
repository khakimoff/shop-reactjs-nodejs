/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Notification from '../Notification';

describe('Notification component', () => {
  it('Notification renders', () => {
    render(
      <Notification title="Succes" />,
    );
    expect(screen.getByText('Succes'));
  });

  it('Notification snapshot', () => {
    const notification = render(
      <Notification title="Succes" />,
    );
    expect(notification).toMatchSnapshot();
  });
});
