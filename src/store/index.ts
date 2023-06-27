import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {}
})

export type RootReduce = ReturnType<typeof store.getState>
