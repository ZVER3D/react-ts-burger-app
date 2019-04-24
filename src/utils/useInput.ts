import { useCallback, useState } from 'react';

export function useInput(
  initValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [val, setVal] = useState(initValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  }, []);

  return [val, onChange];
}
