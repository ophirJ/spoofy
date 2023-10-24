import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import currentTableReducer from './currentTableSlice';
import currentUserReducer from './currentUserSlice';
import playingSongReducer from './playingSongSlice';

const persistConfig = {
  key: 'spoofy',
  storage,
};

const reducers = combineReducers({
  currentUser: currentUserReducer,
  currentTableMode: currentTableReducer,
  playingSong: playingSongReducer,
});

const persistentReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistentReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
