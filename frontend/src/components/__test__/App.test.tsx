/* eslint-disable */
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../AppComp/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App snapshot', () => {
  const cart = render(
    <App />,
  );
  expect(cart).toMatchSnapshot();
});
