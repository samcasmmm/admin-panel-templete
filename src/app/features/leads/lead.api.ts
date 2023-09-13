import { apiSlice } from '../../apiSlice';

const LeadBaseUrl = 'admin/get/leads?';
export const leads = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllLead: builder.query({
      query: () => ({
        url: LeadBaseUrl + 'type=all&pageNo=1&pageSize=100',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllLeadQuery } = leads;
