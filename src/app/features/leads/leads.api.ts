import { apiSlice } from '../../apiSlice';

export const leadApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    allLeads: builder.query({
      query: () => ({
        url: `/admin/get/leads?type=&property_id=&employee_id=&start_date=&end_date=&source=&bhk_type_id&keyword=&pageNo=${0}&pageSize=20&sortBy=id&sortDir=desc`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAllLeadsQuery } = leadApiSlice;
