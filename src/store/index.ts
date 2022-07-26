import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { boardConfigReducer } from './board-config/reducer';

const store = configureStore({
  reducer: {
    boardConfig: boardConfigReducer,
  },
  enhancers: [applyMiddleware(thunk)],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
