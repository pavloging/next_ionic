import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../store/products/productsSelectors';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import { loadProductsList } from '../../store/products/productsActions';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsList);

  useEffect(() => {
    dispatch(loadProductsList());
  }, []);

  return <>{products.length && products.map((i, index) => <ProductCard {...i} key={index} />)}</>;
};
export default Products;
