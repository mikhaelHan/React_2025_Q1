import apiConfig from '../constants/apiConfig.ts';
import { IApiResponse, ICard } from '../models/api.ts';

const apiGetCards = async (search: string): Promise<ICard[] | string> => {
  const url = `${apiConfig.api.baseUrl}?search=${search}`;
  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return `Error: ${result.status} ${result.statusText}`;

    const response: IApiResponse = await result.json();

    return response.results;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return (error as Error).message;
  }
};

export default apiGetCards;
