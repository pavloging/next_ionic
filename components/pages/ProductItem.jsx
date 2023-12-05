import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Redirect, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getProductById, getProductsLoadingStatus } from '../../store/products/productsSelectors';

const ProductItem = () => {
  const params = useParams();
  const { listId } = params;
  const product = useSelector(state => getProductById(state, listId));
  const productsLoading = useSelector(getProductsLoadingStatus);
  if (!productsLoading && !product) {
    return <Redirect to="/products" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products" />
          </IonButtons>
          <IonTitle>Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {product && (
          <>
            <img src={product.image} alt="" />
            <div class="m-4">
              <h1>Title: {product.title}</h1>
              <h2>Price: {product.price}$</h2>
              <p>Description: {product.description}</p>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductItem;
