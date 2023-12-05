import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonIcon,
  IonInput,
  IonButton,
  IonImg,
  IonText,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import { useQRCode } from 'next-qrcode';
import { addCircle, cloudUpload } from 'ionicons/icons';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/products/productsActions';
import { nanoid } from 'nanoid';
import axios from 'axios';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const { data, handleChange, clearForm } = useForm({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const handleFile = async event => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    const fakeEvent = {
      target: {
        name: 'image',
        value: [file.name, base64],
      },
    };

    handleChange(fakeEvent);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const productId = nanoid();

    dispatch(
      createProduct({
        id: productId,
        product: { ...data, image: '', id: productId },
        clearForm,
      })
    );
  };

  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create product</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end"></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} class="mx-3">
        <div className="mx-4 mt-14">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle class="text-center text-3xl" size="large">
                Create product
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <form onSubmit={handleSubmit}>
            <IonList>
              <IonInput
                label="Name"
                labelPlacement="floating"
                counter={true}
                maxlength={20}
                name="title"
                value={data.title}
                onIonChange={handleChange}
              />
              <IonInput
                label="Description"
                labelPlacement="floating"
                counter={true}
                maxlength={100}
                name="description"
                value={data.description}
                onIonChange={handleChange}
              />
              <IonInput
                label="Price"
                labelPlacement="floating"
                counter={true}
                maxlength={10}
                type="number"
                name="price"
                value={data.price}
                onIonChange={handleChange}
              />
              <div className="flex items-center">
                <IonButton expand="block" class="w-70 mr-3">
                  <IonIcon slot="start" icon={cloudUpload} />
                  <label htmlFor="addcsv">Upload image</label>
                </IonButton>
                {data.image[1] && <IonText>{data.image[0]}</IonText>}
              </div>
              <input
                type="file"
                name="image"
                id="addcsv"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={e => handleFile(e)}
              />
            </IonList>
            <IonButton type="submit" onClick={() => setIsShow(prev => !prev)}>
              <IonIcon slot="end" icon={addCircle}></IonIcon> Create
            </IonButton>
          </form>
        </div>

        {/* {isShow && (
          <div className="flex justify-center">
            <Image
              text={'http://localhost:3000/products/1'}
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#FFF',
                  light: '#000',
                },
              }}
            />
          </div>
        )} */}
      </IonContent>
    </IonPage>
  );
};

export default CreateProduct;
