import { useState, useEffect } from 'react';

const getData = (key, initialValue) => {
  const savedData = JSON.parse(localStorage.getItem(key));
  if (savedData) return savedData;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getData(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
