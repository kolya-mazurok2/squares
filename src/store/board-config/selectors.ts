import { createSelector } from 'reselect';
import { RootState } from '../';

const getBoardConfigs = (state: RootState) => state.boardConfig;

export const getBoardConfigsSelector = createSelector(
  getBoardConfigs,
  (boardConfig) => boardConfig.entities
);
