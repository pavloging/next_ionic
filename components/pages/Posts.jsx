import Image from 'next/image';
import Card from '../ui/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import { useState } from 'react';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
const CreateCard = ({ title, type, text, image }) => (
  <Card className="my-4 mx-auto">
    {' '}
    <div className="h-32 w-full relative">
      {' '}
      <img
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={image}
        alt=""
      />{' '}
    </div>{' '}
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      {' '}
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">
        {type}
      </h4>{' '}
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>{' '}
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>{' '}
    </div>{' '}
  </Card>
);
const Posts = () => {
  const homeItems = Store.useState(getHomeItems);
  return (
    <IonPage>
      {' '}
      <IonHeader>
        {' '}
        <IonToolbar>
          {' '}
          <IonTitle>Posts</IonTitle>{' '}
          <IonButtons slot="start">
            {' '}
            <IonMenuButton />{' '}
          </IonButtons>{' '}
          <IonButtons slot="end">
            {' '}
          </IonButtons>{' '}
        </IonToolbar>{' '}
      </IonHeader>{' '}
      <IonContent className="ion-padding" fullscreen>
        {' '}
        <IonHeader collapse="condense">
          {' '}
          <IonToolbar>
            {' '}
            <IonTitle size="large">Posts</IonTitle>{' '}
          </IonToolbar>{' '}
        </IonHeader>{' '}
        {homeItems.map((i, index) => (
          <CreateCard {...i} key={index} />
        ))}{' '}
      </IonContent>{' '}
    </IonPage>
  );
};
export default Posts;
