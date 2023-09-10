import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

interface Lead {
  name: string;
  status: string;
  broker: string;
  leadAssigned: string;
  working_employee: string;
  rewardStatus: string;
}

interface LeadsState {
  leadsData: Lead[];
  pageNo: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: LeadsState = {
  leadsData: [],
  pageNo: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

export const fetchLeads = createAsyncThunk(
  'leads/fetchLeads',
  async (pageNo: number) => {
    try {
      const response = await axios.get(
        `/v2/admin/get/leads?type=all&pageNo=${pageNo}&pageSize=100`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('bearer_token')}`,
          },
        },
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
);

const leadSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setPageNo: (state, action: PayloadAction<number>) => {
      state.pageNo = action.payload;
    },
    nextPage: (state, action: PayloadAction<number>) => {
      state.pageNo = state.pageNo + 1;
    },
    prevPage: (state, action: PayloadAction<number>) => {
      state.pageNo = state.pageNo - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.leadsData = action.payload;
        state.totalPages = action.payload.length;
        state.error = null;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch leads';
      });
  },
});

export const { setPageNo } = leadSlice.actions;

export default leadSlice.reducer;
