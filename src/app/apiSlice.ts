import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
  mode: 'cors',
  baseUrl: 'http://test.hookfish.co.in/v2',
  headers: {
    Authorization: `Bearer ${Cookies.get('bearer_token')}`,
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['login', 'visited'],
  endpoints: () => ({}),
});
