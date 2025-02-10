import { IApiResponse, ICard } from '../../../models/api.ts';
import { apiRequest } from '../../../api/card.ts';
import { valid } from '../../../models/mainPage.ts';
import { ILSValue } from '../../../constants/LSKey.ts';

export const getCards = async (query: ILSValue, option: string | undefined): Promise<string | ICard[]> => {
  const path =
    option === valid.query || (!option && !!query.search) ? `?search=${query.search}` : `?page=${query.page}`;

  const response: IApiResponse | string = await apiRequest<IApiResponse>(path);
  return typeof response === 'string' ? response : response.results;
};
