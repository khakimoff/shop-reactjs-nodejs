import { useDispatch } from 'react-redux';
import { removeFromCart, addQuantity, decQuantity } from '../redux/actions/cartAction';
import ImageComp from './Image'; // eslint-disable-line
import ButtonComp from './Button'; // eslint-disable-line

// Type
type CartItemsType = {
    items: []
}

type CartItemPropsType = {
    price: number,
    quantity: number
    image: string,
    id: number,
    title: string
}

const CartItems = ({ items }: CartItemsType) => {
  // Reverse to display the added product at the top of the list
  const cartItems = [...items].reverse();
  const dispatch = useDispatch();

  return (
    <ul className="CartItems">
      {cartItems.map((item: CartItemPropsType) => {
        const {
          price, quantity, image, id, title,
        } = item;
        // Round to numerical value
        const cartItemsSum = parseFloat((price * quantity).toFixed(2));
        return (
          <li
            key={id}
          >
            <ImageComp
              height={50}
              width={50}
              src={image}
              alt="product"
            />
            <p>{title}</p>
            <div>
              <ButtonComp
                title="-"
                onClick={() => dispatch(decQuantity(id))}
              />
              <p>
                {quantity}
              </p>
              <ButtonComp
                title="+"
                onClick={() => dispatch(addQuantity(id))}
              />
            </div>
            <p>
              $
              {cartItemsSum}
            </p>
            <div
              onClick={() => dispatch(removeFromCart(id))}
              onKeyPress={() => dispatch(removeFromCart(id))}
              role="button"
              tabIndex={0}
              aria-label="Delete"
              className="delete"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
