import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import { bossReducer } from '../reducers/bossReducer';
import thunk from 'redux-thunk';

export const store = configureStore(
  {reducer:bossReducer},
  applyMiddleware(thunk)
);
