import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://test.hookfish.co.in/v2',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['login'],
  endpoints: () => ({}),
});
