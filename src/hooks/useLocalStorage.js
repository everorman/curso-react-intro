import { useEffect, useState } from 'react';
const useLocalStorage = (itemKey, initialValue) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemKey);
        let parseTodos;
        if (!localStorageItem) {
          localStorage.setItem(itemKey, JSON.stringify(initialValue));
        } else {
          parseTodos = JSON.parse(localStorage.getItem(itemKey));
          setItem(parseTodos);
        }
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }, 2000);

  }, []);




  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);

  };
  return { item, saveItem, loading, error };
};

export {
  useLocalStorage
};