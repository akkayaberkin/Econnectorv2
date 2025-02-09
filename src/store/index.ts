import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './language'

export const store = configureStore({
  reducer: {
    language: languageReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 