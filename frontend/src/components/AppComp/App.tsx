import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store'; // eslint-disable-line
import ListProductComp from '../../pages/productsList/productsList'; // eslint-disable-line
import CartComp from '../../pages/cart/cart'; // eslint-disable-line
import NavigationComp from '../Navigation/Naviagation'; // eslint-disable-line

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
