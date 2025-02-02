import apiConfig from '../constants/apiConfig.ts';
import { IApiResponse, ICard } from '../models/api.ts';

const apiGetCards = async (search: string): Promise<ICard[] | null> => {
  const url = `${apiConfig.api.baseUrl}?search=${search}`;
  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return null;

    const response: IApiResponse = await result.json();

    return response.results;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return null;
  }
};

export default apiGetCards;
