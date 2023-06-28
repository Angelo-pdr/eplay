import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import api from '../services/api'
import CartReducer from './reduce/cart'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReduce = ReturnType<typeof store.getState>
