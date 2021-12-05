import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItemsComp from '../components/ProductItems'; // eslint-disable-line
import ImageComp from '../components/Image'; // eslint-disable-line
import NotificationComp from '../components/Notification'; // eslint-disable-line
import { fetchProducts } from '../redux/actions/productAction';
import Loading from '../static/loading.gif';

type TypeProductPage = {
  products: []
}

// interface SomeType  {
//   loading: boolean,
//   products: any,
//   hasErrors: boolean
// }

const ProductPage = () => {
  const stateProducts = useSelector((state:TypeProductPage) => state.products);
  const { loading, products, hasErrors }:any = stateProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderProducts = () => {
    if (loading) {
      return (
        <div
          className="ProductPage_loader"
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
