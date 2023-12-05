import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
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
import useForm from '../../../hooks/useForm';
import { createProduct } from '../../../store/products/productsActions';
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

    function uploadImage(img) {
      let body = new FormData();
      body.set('key', 'bb2d39e7c358737b679fa1e21bae41e4');
      body.append('image', img);

      return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body,
      });
    }

    uploadImage(event.target.files[0])
      .then(resp => {
        console.log(resp.data.data.display_url); // I'm aware it's data.data, that is how it returns stuff
        const fakeEvent = {
          target: {
            name: 'image',
            value: [file.name, resp.data.data.display_url],
          },
        };

        console.log(fakeEvent);

        handleChange(fakeEvent);
      })
      .catch(error => {
        toast.error(error.message);
      });
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
              // <IonItem className='p-0' key={field.name + '_' + field.label}>
              <>
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
              </>
              // </IonItem>
            );
          })}
          <div className="flex flex-col text-center mt-2 mb-2">
            <label
              htmlFor="addcsv"
              className="flex gap-2 bg-blue-500 rounded-xl cursor-pointer p-4 items-center justify-center"
            >
              <IonIcon slot="start" icon={cloudUpload} />
              Upload image
            </label>
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
          <IonText color="danger">
            {errors.image}
          </IonText>

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
        <IonButton type="submit">
          <IonIcon slot="end" icon={addCircle}></IonIcon> Create
        </IonButton>
      </form>
    </div>
  );
};

export default CreateProduct;
