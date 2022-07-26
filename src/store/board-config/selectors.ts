import { createSelector } from 'reselect';
import { RootState } from '../';

const getBoardConfigs = (state: RootState) => state.boardConfig;
console.log(getBoardConfigs);

export const getBoardConfigsSelector = createSelector(
  getBoardConfigs,
  (boardConfig) => boardConfig.entities
);
