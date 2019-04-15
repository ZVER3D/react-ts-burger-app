import { useState } from 'react';

export function useInput(
  initValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [val, setVal] = useState(initValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.currentTarget.value);
  }

  return [val, onChange];
}
