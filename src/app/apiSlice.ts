import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const authorizationHeader = Cookies.get('bearer_token')
  ? `Bearer ${Cookies.get('bearer_token')}`
  : '';

const JSESSIONIDHeader = Cookies.get('JSESSIONID')
  ? `${Cookies.get('JSESSIONID')}`
  : '';

const baseQuery = fetchBaseQuery({
  baseUrl: '/v2',
  mode: 'cors',
  headers: {
    Authorization: authorizationHeader,
    Cookies: JSESSIONIDHeader,
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['login', 'visited', 'leads', 'users'],
  endpoints: () => ({}),
});
