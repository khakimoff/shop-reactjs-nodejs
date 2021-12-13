import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItemsComp from '../../components/ProductItem/ProductItems'; // eslint-disable-line
import ImageComp from '../../components/ImageComp/Image'; // eslint-disable-line
import NotificationComp from '../../components/NotificationComp/Notification'; // eslint-disable-line
import fetchProducts from '../../redux/actions/productAction'; // eslint-disable-line
import Loading from '../../static/loading.gif';
import './style.scss';

type TypeProductPage = {
  products: []
}

const ProductPage = () => {
  const stateProducts = useSelector((state: TypeProductPage) => state.products);
  const { loading, products, hasErrors }: any = stateProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Show loading, error, or success state
  const renderProducts = () => {
    if (loading) {
      return (
        <div
          className="Loader"
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
    <div className="ProductList">
      <h3>Products list</h3>
      {renderProducts()}
    </div>
  );
};

export default ProductPage;
