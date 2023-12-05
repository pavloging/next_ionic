import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { getProductsList } from '../../store/products/productsSelectors';
import ProductCard from './ProductCard';

const Products = () => {
  const products = useSelector(getProductsList);

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
