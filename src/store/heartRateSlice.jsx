import { createSlice } from '@reduxjs/toolkit'
import { fetchEcgSummary } from './asyncThunk';

const initialState = {
  beatdata: []
}

export const heartRateSlice = createSlice({
  name: 'heartRate',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEcgSummary.fulfilled, (state, action) => {
        state.beatdata = action.payload.heart_rate_chart;
      });
  },
})

export default heartRateSlice.reducer