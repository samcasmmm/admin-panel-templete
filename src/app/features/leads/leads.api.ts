import { apiSlice } from '../../apiSlice';

const BaseUrl = '/admin/get/leads?';

export const leadApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    allLeads: builder.query({
      query: () => ({
        url: BaseUrl + 'type=all&pageNo=0&pageSize=100',
        method: 'GET',
      }),
    }),
  }),
});

export const { useAllLeadsQuery } = leadApiSlice;
