import { apiSlice } from '../../apiSlice';

export const visitedEmployeeApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    partnerMappedData: builder.query({
      query: () => ({
        url: '/emp/partner/mapping',
        method: 'GET',  
      }),
    }),
  }),
});

export const { usePartnerMappedDataQuery } = visitedEmployeeApiSlice;
