interface IApiConfig {
  baseUrl: string;
  env: string | undefined;
  ERROR_MESSAGES: Record<number, string>;
}

const apiConfig: IApiConfig = {
  baseUrl: 'https://swapi.dev/api/people/',
  env: import.meta.env.VITE_NODE_ENV,
  ERROR_MESSAGES: {
    400: 'Bad Request: The server could not understand your request.',
    401: 'Unauthorized: Please log in to continue.',
    403: 'Forbidden: You do not have permission to access this resource.',
    404: 'Not Found: The requested resource could not be found.',
    500: 'Server Error: Something went wrong on our end.',
    502: 'Bad Gateway: Received an invalid response from the upstream server.',
    503: 'Service Unavailable: The server is temporarily unavailable. Please try again later.',
    504: 'Gateway Timeout: The server took too long to respond.',
  },
};

export default apiConfig;
