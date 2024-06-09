import React from 'react';
const useLocalStorage = (itemKey, initialValue) => {
  const localStorageItem = localStorage.getItem(itemKey);
  let parseTodos = initialValue;
  if (!localStorageItem) {
    localStorage.setItem(itemKey, JSON.stringify(initialValue));
  } else {
    parseTodos = JSON.parse(localStorage.getItem(itemKey));
  }

  const [item, setItem] = React.useState(parseTodos);

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);

  };
  return [item, saveItem];
};

export {
  useLocalStorage
};