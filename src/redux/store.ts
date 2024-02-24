import {configureStore} from '@reduxjs/toolkit';
import loading from '@redux/Loading/loading.reducer';
import {articlesApis} from '@services/articlesApis';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    loading: loading,
    [articlesApis.reducerPath]: articlesApis.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(articlesApis?.middleware),
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
