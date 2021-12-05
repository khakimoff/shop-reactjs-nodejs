/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Image from '../Image';

describe('Image component', () => {
  it('Image renders', () => {
    render(
      <Image
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        width={70}
        height={100}
        alt="sweater"
      />,
    );
    expect(screen.getByRole('img'));
    expect(screen.getAllByAltText('sweater'));
  });

  it('Image snapshot', () => {
    const img = render(
      <Image
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        width={70}
        height={100}
        alt="sweater"
      />,
    );
    expect(img).toMatchSnapshot();
  });
});
