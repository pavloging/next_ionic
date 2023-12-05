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

import { useEffect, useState } from 'react';
import productsService from '../../services/products.service';
import { toast } from 'react-toastify';

const ProductItem = () => {
  const [product, setProduct] = useState();
  const [productLoading, setProductLoading] = useState(true);
  const params = useParams();
  const { listId } = params;

  const fetchProductById = async () => {
    try {
      const { content } = await productsService.fetchProductById(listId);
      setProduct(content);
      setProductLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  if (!productLoading && !product) {
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
