import apiConfig from '../constants/apiConfig.ts';
import { IApiResponse, ICard } from '../models/api.ts';

export const apiGetCards = async (search: string): Promise<ICard[] | string> => {
  const url = `${apiConfig.baseUrl}?search=${search}`;
  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return apiConfig.ERROR_MESSAGES[result.status];

    const response: IApiResponse = await result.json();

    return response.results;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return (error as Error).message;
  }
};

export const getCardByParams = async (search: string): Promise<ICard | string> => {
  const url = `${apiConfig.baseUrl}${search}`;
  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return apiConfig.ERROR_MESSAGES[result.status];

    return await result.json();
  } catch (error) {
    console.error('Error fetching cards:', error);
    return (error as Error).message;
  }
};
