import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../../services/http/board-config';
import { BoardConfig } from '../../types';
import { SLICE_NAME } from './constants';

export const getBoardConfigs = createAsyncThunk(
  `${SLICE_NAME}/getBoardConfigs`,
  async (): Promise<BoardConfig[]> => {
    const response = await getAll();
    return response.data;
  }
);
