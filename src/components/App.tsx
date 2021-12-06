import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store'; // eslint-disable-line
import ListProductComp from '../pages/productsList'; // eslint-disable-line
import CartComp from '../pages/cart'; // eslint-disable-line
import NavigationComp from './Naviagation'; // eslint-disable-line
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavigationComp />
      <Routes>
        <Route path="/" element={<ListProductComp />} />
        <Route path="basket" element={<CartComp />} />
        <Route path="*" element={<ListProductComp />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
