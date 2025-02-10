import apiConfig from '../constants/apiConfig.ts';

export const apiRequest = async <T>(search: string): Promise<T | string> => {
  const url = `${apiConfig.baseUrl}${search}`;
  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return apiConfig.ERROR_MESSAGES[result.status];

    return await result.json();
  } catch (error) {
    console.error('Error fetching request:', error);
    return (error as Error).message;
  }
};
