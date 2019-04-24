import { useCallback, useState } from 'react';
import * as yup from 'yup';
import { IDeliveryMethod } from '../components/UI/SelectInput';

export function useSelect(initValue: IDeliveryMethod | null, schema: yup.StringSchema) {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const onChange = (option: any) => {
    setValue(option);
  };

  const validate = useCallback(async () => {
    try {
      setTouched(true);
      await schema.validateSync(value!.value);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, [value]);

  return { value, onChange, validate, error, touched };
}
