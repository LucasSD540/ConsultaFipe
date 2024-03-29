import { configureStore } from '@reduxjs/toolkit'
import vehicleSlice from './reducers/vehicle'
import modelSlice from './reducers/model'
import yearSlice from './reducers/year'
import resultSlice from './reducers/result'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    vehicle: vehicleSlice,
    model: modelSlice,
    year: yearSlice,
    result: resultSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
