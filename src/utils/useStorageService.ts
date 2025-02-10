import { useState } from 'react';
import { ILSValue, LSKey } from '../constants/LSKey.ts';

const useStorageService = () => {
  const [storeValue, setStoreValue] = useState<ILSValue>(() => {
    const item: string | null = localStorage.getItem(LSKey);

    if (item !== null) {
      const parsedItem = JSON.parse(item);
      if ('search' in parsedItem && 'page' in parsedItem) {
        return parsedItem as ILSValue;
      }
    }

    const newItem: ILSValue = { search: '', page: 1 };
    localStorage.setItem(LSKey, JSON.stringify(newItem));
    return newItem;
  });

  const changeValue = (value: ILSValue) => {
    localStorage.setItem(LSKey, JSON.stringify(value));
    setStoreValue(value);
  };

  return [storeValue, changeValue] as const;
};

export default useStorageService;
