// // import { devToolsEnhancer } from '@redux-devtools/extension';
// // import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './todoReducer';
// import { authReducer } from './authentificated/authReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todoPersistConfig = {
  key: 'todoStorage',
  storage,
  whitelist: ['tasks'],
};

export const store = configureStore({
  reducer: {
    todoStorage: persistReducer(todoPersistConfig, todoReducers),
    //     auth: persistReducer(authPersistConfig, authReducer),
    //     // ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
