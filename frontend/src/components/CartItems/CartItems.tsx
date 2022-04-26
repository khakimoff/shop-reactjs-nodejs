import { useDispatch } from 'react-redux';
import { removeFromCart, addQuantity, decQuantity } from '../../redux/actions/cartAction'; 
import ImageComp from '../ImageComp/Image'; 
import ButtonComp from '../Button/Button'; 
import style from './style.module.scss'; 

// Type
export type CartItemsType = {
  items: []
}

export type CartItemPropsType = {
  price: number,
  quantity: number
  image: string,
  id: any,
  title: string
}

const CartItems = ({ items }: CartItemsType) => {
  // Reverse to display the added product at the top of the list
  const cartItems = [...items].reverse();
  const dispatch = useDispatch();

  return (
    <ul className={style.items}>
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
            <div className={style.buttons}>
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
            <div>
              <ButtonComp
                title="x"
                onClick={() => dispatch(removeFromCart(id))}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
