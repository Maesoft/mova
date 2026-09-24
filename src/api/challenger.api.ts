import { isAxiosError } from 'axios';

import { api } from './api';

export type ChallengerMediaType = 'image' | 'video';

export type PublishedChallenger = {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: ChallengerMediaType;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export async function getPublishedChallengerRequest() {
  try {
    const response = await api.get<PublishedChallenger>('/challengers/published');

    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
}
