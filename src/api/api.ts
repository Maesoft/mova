import { create } from 'axios';

import { useAuthStore } from '@/store/auth.store';

const apiBaseUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://10.0.2.2:3000';

export const api = create({
  baseURL: apiBaseUrl,
});

api.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = ['Bearer', token].join(' ');
  }

  return config;
});
