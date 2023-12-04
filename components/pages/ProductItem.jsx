import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import Store from '../../store';
import * as selectors from '../../store/selectors';

const ProductItem = () => {
  const products = Store.useState(selectors.getProducts);
  const params = useParams();
  const { listId } = params;
  const product = products.find(item => Number(item.id) === Number(listId));
  console.log('products', products); // id: groceries
  console.log('listId', listId);
  console.log('product', product);

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
        <img src={product.image} alt="" />
        <div class="m-4">
          <h1>Title: {product.title}</h1>
          <h2>Price: {product.price}$</h2>
          <p>Description: {product.description}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductItem;
