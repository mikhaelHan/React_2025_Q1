import { LSKey } from '../constants/LSKey.ts';

export const storageService = (query?: string) => {
  if (query !== undefined) {
    localStorage.setItem(LSKey, query.trim());
    return query.trim();
  }
  const result: string | null = localStorage.getItem(LSKey);
  if (result === null) {
    localStorage.setItem(LSKey, '');
    return '';
  }
  return result;
};
