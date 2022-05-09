import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItemsComp from '../../components/ProductItem/ProductItems'; 
import ImageComp from '../../components/ImageComp/Image'; 
import NotificationComp from '../../components/NotificationComp/Notification'; 
import fetchProducts from '../../redux/actions/productAction'; 
import Loading from '../../static/loading.gif';
import style from './style.module.scss';

type TypeProducts = {
  loading: boolean,
  products: [],
  hasErrors: string
}

type TypeProductPage = {
  products: TypeProducts
}

const ProductPage = () => {
  const stateProducts = useSelector((state: TypeProductPage) => state.products);
  const { loading, products, hasErrors } = stateProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Show loading, error, or success state
  const renderProducts = () => {
    if (loading) {
      return (
        <div
          className={style.loader}
        >
          <ImageComp
            src={Loading}
            width={77}
            height={77}
            alt="product"
          />
        </div>

      );
    }

    if (hasErrors) {
      return (
        <NotificationComp
          title="Error"
        />
      );
    }

    return (
      <ProductItemsComp
        products={products}
      />
    );
  };

  return (
    <div className={style.products}>
      <h3>Products list</h3>
      {renderProducts()}
    </div>
  );
};

export default ProductPage;
