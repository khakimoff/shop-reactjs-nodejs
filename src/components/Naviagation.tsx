import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageComp from './Image'; // eslint-disable-line
import Logo from '../static/logo.png';
import Basket from '../static/basket.png';

// Type
type NaviagationType = {
    cart: []
}
const Naviagation = () => {
  // Number of products
  const itemCartAmount = useSelector((state: NaviagationType) => state.cart.length);

  return (
    <header>
      <nav className="Navigation">
        <Link to="/">
          <ImageComp
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div>
          <Link
            hidden={itemCartAmount === 0}
            to="/basket"
          >
            <ImageComp
              src={Basket}
              width={50}
              height={40}
              alt="basket"
            />
            <p>
              {itemCartAmount}
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Naviagation;
