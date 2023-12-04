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
  <IonItem routerLink={`/tabs/posts/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

const AllPosts = ({ onSelect }) => {
  const posts = Store.useState(selectors.getPosts);

  return (
    <>
      {posts.map((list, i) => (
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
          <IonTitle>Create new post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create new post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <AllPosts />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Create;
