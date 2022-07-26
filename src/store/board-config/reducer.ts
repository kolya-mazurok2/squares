import { createSlice } from '@reduxjs/toolkit';
import { BoardConfig } from '../../types';
import { getBoardConfigs } from './actions';
import { SLICE_NAME } from './constants';

export interface State {
  entities: BoardConfig[];
}

export const INITIAL_STATE: State = {
  entities: [],
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoardConfigs.fulfilled, (state, payload) => {
      state.entities = payload.payload;
    });
  },
});

export const boardConfigReducer = slice.reducer;
