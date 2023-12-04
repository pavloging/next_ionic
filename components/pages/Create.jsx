import Store from '../../store';
import * as selectors from '../../store/selectors';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';

const ListEntry = ({ list, ...props }) => (
  <IonItem routerLink={`/tabs/products/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

const AllProducts = ({ onSelect }) => {
  const products = Store.useState(selectors.getProducts);

  return (
    <>
      {products.map((list, i) => (
        <ListEntry list={list} key={i} />
      ))}
    </>
  );
};

const Create = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Create new product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create new product</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <AllProducts />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Create;
