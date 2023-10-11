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
    propertyForLoginUser: builder.query({
      query: () => ({
        url: `/properties-for-login-user`,
        method: 'GET',
      }),
      onQueryStarted(arg, api) {
        console.log('onQuery -', arg);
        console.log('onQuery -', api);
      },
      transformErrorResponse() {
        toast.error('Connot get users');
      },
    }),
  }),
});

export const { useGetListOfUsersQuery, usePropertyForLoginUserQuery } =
  usersApiSlice;
