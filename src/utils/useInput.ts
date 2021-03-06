import { useCallback, useState } from 'react';
import * as yup from 'yup';

export function useInput(initValue: string, schema: yup.StringSchema) {
  const [value, setVal] = useState(initValue);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.currentTarget.value);
  }

  const validate = useCallback(async () => {
    try {
      setTouched(true);
      await schema.validateSync(value);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, [value]);

  return { value, onChange, validate, error, touched };
}
