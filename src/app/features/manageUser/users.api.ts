import toast from 'react-hot-toast';
import { apiSlice } from '../../apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getListOfUsers: builder.query({
      query: ({ purpose }) => ({
        url: `/employee?purpose=${purpose}`,
        method: 'GET',
      }),
      transformErrorResponse() {
        toast.error('Connot get users');
      },
    }),
  }),
});

export const { useGetListOfUsersQuery } = usersApiSlice;
