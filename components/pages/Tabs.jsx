import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, addCircle, list } from 'ionicons/icons';

import Home from './Create';
import Posts from './Posts';
import ListDetail from './ListDetail';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/create" render={() => <Home />} exact={true} />
        <Route path="/tabs/posts" render={() => <Posts />} exact={true} />
        <Route path="/tabs/posts/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/create" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab2" href="/tabs/posts">
          <IonIcon icon={list} />
          <IonLabel>Posts</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/tabs/create">
          <IonIcon icon={addCircle} />
          <IonLabel>Create</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
