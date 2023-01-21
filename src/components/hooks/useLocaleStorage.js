import { useState, useEffect } from 'react';

export const useLocaleStorage = (key, defaultValue) => {
  //   const savedContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));

  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
