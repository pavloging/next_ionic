import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonIcon,
  IonInput,
  IonButton,
  IonText,
  IonItem,
} from '@ionic/react';
import { addCircle, cloudUpload } from 'ionicons/icons';
import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../store/products/productsActions';
import { nanoid } from 'nanoid';
import { validatorConfig } from './validatorConfig';

const formFields = [
  {
    type: 'text',
    name: 'title',
    label: 'Name...',
    maxLength: 20,
  },
  {
    type: 'text',
    name: 'description',
    label: 'Description...',
    maxLength: 100,
  },
  {
    type: 'number',
    name: 'price',
    label: 'Price...',
    maxLength: 10,
  },
];

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const { data, handleChange, clearForm, errors, validate } = useForm(
    {
      title: '',
      description: '',
      price: '',
      image: '',
    },
    validatorConfig
  );

  const handleFile = async event => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log('file');
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
    const errors = validate();
    const isValid = Object.keys(errors).length === 0;
    console.log(errors);

    if (isValid) {
      dispatch(
        createProduct({
          id: productId,
          product: { ...data, image: '', id: productId },
          clearForm,
        })
      );
    }
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
    <div className="mx-4 mt-14">
      <form onSubmit={handleSubmit}>
        <IonList>
          {formFields.map(field => {
            console.log(errors);
            return (
              <IonItem key={field.name + '_' + field.label}>
                <IonInput
                  label={field.label}
                  labelPlacement="floating"
                  counter={true}
                  type={field.type}
                  maxlength={field.maxLength}
                  name={field.name}
                  value={data[field.name]}
                  onIonChange={handleChange}
                />
                <IonText color="danger">{errors[field.name]}</IonText>
              </IonItem>
            );
          })}
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

          {/* <IonItem>
            <IonInput
              type="file"
              name="image"
              id="addcsv"
              accept="image/*"
              onChange={e => handleFile(e)}
            />
            <IonText color="danger">{errors.image}</IonText>
          </IonItem> */}
        </IonList>
        <IonButton type="submit" onClick={() => setIsShow(prev => !prev)}>
          <IonIcon slot="end" icon={addCircle}></IonIcon> Create
        </IonButton>
      </form>
    </div>
  );
};

export default CreateProduct;
