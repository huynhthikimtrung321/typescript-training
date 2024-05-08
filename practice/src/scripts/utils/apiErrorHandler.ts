import { AxiosError, AxiosResponse } from 'axios';

export const withApiErrorHandler = async <T>(
  promiseFunction: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await promiseFunction();
    return response.data;
  } catch (error: any) {
    // Error handling with 'any' type to enable property access below
    const axiosError = error as AxiosError; // Casting error to AxiosError for TypeScript type safety
    if (!axiosError.response) {
      throw new Error('Something went wrong. Please try again later.');
    }
    throw new Error(axiosError.message);
  }
};
