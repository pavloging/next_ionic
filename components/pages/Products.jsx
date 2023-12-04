import Card from '../ui/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../store/selectors';
import Store from '../../store';
const CreateCard = ({ id, title, price, description, image }) => (
  <Link to={`/products/${id}`}>
    <Card onClick={() => console.log(id)} className="my-4 mx-auto">
      <div className="h-32 w-full relative">
        <img
          className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">
          Price: {price}$
        </h4>
        <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  </Link>
);
const Products = () => {
  const products = Store.useState(getProducts);
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
        {products.map((i, index) => (
          <CreateCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};
export default Products;
