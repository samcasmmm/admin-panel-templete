import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/v2',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['login', 'visited'],
  endpoints: () => ({}),
});
