import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie'

const authorizationHeader = Cookies.get('bearer_token') ? `Bearer ${Cookies.get('bearer_token')}` : '';

const baseQuery = fetchBaseQuery({
  baseUrl: '/v2',
  headers:{
    Authorization: authorizationHeader
  }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['login', 'visited'],
  endpoints: () => ({}),
});
