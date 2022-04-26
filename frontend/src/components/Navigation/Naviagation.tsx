import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageComp from '../ImageComp/Image'; 
import Logo from '../../static/logo.png';
import Basket from '../../static/basket.png';
import style from './style.module.scss';

// Type
export type NaviagationType = {
  cart: []
}
const Naviagation = () => {
  // Number of products
  const itemCartAmount = useSelector((state: NaviagationType) => state.cart.length);

  return (
    <header>
      <nav className={style.navigation}>
        <Link to="/">
          <ImageComp
            src={Logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div className={style.wrapper}>
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
