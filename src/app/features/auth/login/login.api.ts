import { apiSlice } from '../../../apiSlice';

export const loginApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    sendOTP: builder.mutation({
      query: (data) => ({
        url: '/user/otp',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (data) => ({
        url: '/api/app/authenticate',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendOTPMutation, useVerifyOTPMutation } = loginApiSlice;
