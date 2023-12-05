import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end"></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {products && products.map((i, index) => <ProductCard {...i} key={index} />)}
      </IonContent>
    </IonPage>
  );
};
export default Products;
