import { ILSValue, LSKey } from '../../../constants/LSKey.ts';

export const getInitialPage = () => {
  const item = localStorage.getItem(LSKey);
  const parsedItem: ILSValue | null = item ? JSON.parse(item) : null;
  return parsedItem?.page || 1;
};
