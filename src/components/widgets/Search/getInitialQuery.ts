import { ILSValue, LSKey } from '../../../constants/LSKey.ts';

export const getInitialQuery = () => {
  const item = localStorage.getItem(LSKey);
  const parsedItem: ILSValue | null = item ? JSON.parse(item) : null;
  return parsedItem?.search || '';
};
