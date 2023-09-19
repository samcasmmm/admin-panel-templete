import toast from 'react-hot-toast';
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
      transformErrorResponse(baseQueryReturnValue: any, meta, arg) {
        // console.log(baseQueryReturnValue?.originalStatus);
        console.log(baseQueryReturnValue);
        if (baseQueryReturnValue?.originalStatus === 503) {
          toast.error('Try Again');
          console.log(baseQueryReturnValue?.originalStatus);
        }
      },
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
