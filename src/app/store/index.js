import { configureStore } from '@reduxjs/toolkit';
import { api } from 'shared/api';

import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    rootReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
