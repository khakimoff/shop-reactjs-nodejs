import { useSelector } from 'react-redux';
import NotificationComp from '../../components/NotificationComp/Notification'; // eslint-disable-line
import CartSummaryComp from '../../components/CartSummary/CartSummary'; // eslint-disable-line
import CartItemComp from '../../components/CartItems/CartItems';// eslint-disable-line
import './style.scss';

type TypeCart = {
  cart: [],
  quantity: number
}

const CartPage = () => {
  const itemsCart = useSelector((state: TypeCart) => state.cart);
  const itemLenght = itemsCart.map((item: TypeCart) => item.quantity).reduce((a, b) => a + b, 0);
  const notEqualNilLength = itemLenght !== 0;
  console.log(itemsCart, 'itemsCart');

  return (
    <main>
      {notEqualNilLength
        ? (
          <>
            <h3>Cart</h3>
            <div className="CartPage">
              <CartItemComp
                items={itemsCart}
              />
              <CartSummaryComp
                items={itemsCart}
              />
            </div>
          </>
        )
        : (
          <NotificationComp
            title="Your shopping cart is empty "
          />
        )}
    </main>
  );
};

export default CartPage;
