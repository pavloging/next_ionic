import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    console.log('event');
    setData(prevState => ({
      ...prevState,
      [target.name]: target.type === 'number' ? Number(target.value) : target.value,
    }));
  };

  const clearForm = () => {
    console.log('clear');
    setData(initialState);
  };

  return { data, handleChange, clearForm };
}
