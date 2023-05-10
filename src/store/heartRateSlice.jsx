import { createSlice } from '@reduxjs/toolkit'
import { fetchEcgSummary } from './asyncThunk';

const initialState = {
  beatdata: []
}

export const heartRateSlice = createSlice({
  name: 'heartRate',
  initialState,
  reducers: {
    setSelectedChartData(state, action) {
      // const newTodo = action.payload;
      // state.beatdata = action.payload.data;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEcgSummary.fulfilled, (state, action) => {
        state.beatdata = action.payload.heart_rate_chart;
      });
  },
})

export const { setSelectedChartData } = heartRateSlice.actions

export default heartRateSlice.reducer