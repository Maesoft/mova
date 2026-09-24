import { isAxiosError } from 'axios';

import { api } from './api';

export type PublishedNutrition = {
  id: string;
  title: string;
  description: string;
  image: string;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export async function getPublishedNutritionRequest() {
  try {
    const response = await api.get<PublishedNutrition>('/nutrition/published');

    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
}
