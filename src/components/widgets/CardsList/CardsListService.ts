import { LSKey } from '../../../constants/LSKey.ts';
import apiGetCards from '../../../api/card.ts';

export const storageService = (query?: string) => {
  if (query !== undefined) {
    localStorage.setItem(LSKey, query.trim());
    return query.trim();
  }
  const res: string | null = localStorage.getItem(LSKey);
  if (res === null) {
    localStorage.setItem(LSKey, '');
    return '';
  }
  return res;
};

export const getCards = async (query: string) => {
  const LSResult: string = storageService(query);

  return await apiGetCards(LSResult);
};
