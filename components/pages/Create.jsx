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
} from '@ionic/react';
import { useQRCode } from 'next-qrcode';
import { addCircle, cloudUpload } from 'ionicons/icons';
import { useState } from 'react';

const Create = () => {
  const { Image } = useQRCode();
  const [isShow, setIsShow] = useState(false);
  const handleFile = async event => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    console.log(base64);
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
      <IonContent fullscreen={true} class="mx-3">
        <div className="mx-4 mt-14">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle class="text-center text-3xl" size="large">
                Create product
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            <IonInput
              label="Name"
              labelPlacement="floating"
              counter={true}
              maxlength={20}
            ></IonInput>
            <IonInput
              label="Description"
              labelPlacement="floating"
              counter={true}
              maxlength={100}
            ></IonInput>

            <IonInput
              label="Price"
              labelPlacement="floating"
              counter={true}
              maxlength={10}
            ></IonInput>
            <IonButton expand="block">
              <IonIcon slot="start" icon={cloudUpload}></IonIcon>
              <label htmlFor="addcsv">Upload image</label>
            </IonButton>
            <input
              type="file"
              name="file"
              id="addcsv"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={e => handleFile(e)}
            />
          </IonList>
          <IonButton onClick={() => setIsShow(prev => !prev)}>
            <IonIcon slot="end" icon={addCircle}></IonIcon> Create
          </IonButton>
        </div>

        {isShow && (
          <div className='flex justify-center'>
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
        )}
      </IonContent>
    </IonPage>
  );
};

export default Create;
