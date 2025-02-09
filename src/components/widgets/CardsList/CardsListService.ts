import apiGetCards from '../../../api/card.ts';
import { storageService } from '../../../utils/storageService.ts';
import { ICard } from '../../../models/api.ts';

export const getCards = async (query: string): Promise<ICard[] | string> => {
  const LSResult: string = storageService(query);

  return await apiGetCards(LSResult);
};
