import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { addCircle, list } from 'ionicons/icons';

import CreateProduct from './CreateProduct';
import Products from './Products';
import ProductItem from './ProductItem';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/create" render={() => <CreateProduct />} exact={true} />
        <Route path="/products" render={() => <Products />} exact={true} />
        <Route path="/products/:listId" render={() => <ProductItem />} exact={true} />
        <Route path="/" render={() => <Redirect to="/create" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab2" href="/products">
          <IonIcon icon={list} />
          <IonLabel>Products</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/create">
          <IonIcon icon={addCircle} />
          <IonLabel>Create</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
