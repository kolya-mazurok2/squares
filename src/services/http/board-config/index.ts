import { BASE_URL, DEFAULT_RESPONSE } from './constants';
import { CONFIG_API_RESPONSE } from './types';

export const getAll = async (): Promise<CONFIG_API_RESPONSE> => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return {
      ...DEFAULT_RESPONSE,
      data,
    };
  } catch {
    return {
      ...DEFAULT_RESPONSE,
      success: false,
    };
  }
};
