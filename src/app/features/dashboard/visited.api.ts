import { apiSlice } from '../../apiSlice';
import Cookies from 'js-cookie'

export const visitedEmployeeApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    partnerMappedData: builder.query({
      query: () => ({
        url: '/emp/partner/mapping',
        method: 'GET',
        headers: { 
          Authorization: 'Bearer ' + Cookies.get('bearer_token')
        }
      }),
    }),
  }),
});

export const { usePartnerMappedDataQuery } = visitedEmployeeApiSlice;
