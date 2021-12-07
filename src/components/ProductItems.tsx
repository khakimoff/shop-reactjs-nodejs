import { useDispatch } from 'react-redux';
import ButtonComp from './Button' // eslint-disable-line
import ImageComp from './Image' // eslint-disable-line
import { postProduct } from '../redux/actions/productAction';

// Type
export type ProductItemsType = {
    products: []
}

export type ProductItemPropsType = {
    id: number,
    image: string,
    title: string
    price: number
}

const ProductItems = ({ products }: ProductItemsType) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        Total:&nbsp;
        <b>{products.length}</b>
      </p>
      <ul className="ProductItems">
        {products.map((item: ProductItemPropsType) => (
          <li
            key={item.id}
          >
            <ImageComp
              height={100}
              width={100}
              src={item.image}
              alt="image"
            />
            <p>
              {item.title}
            </p>
            <p>
              $
              {item.price}
            </p>
            <ButtonComp
              title="Add to cart"
              onClick={() => dispatch(postProduct(products[item.id - 1]))}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductItems;
