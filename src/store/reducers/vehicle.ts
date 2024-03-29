import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type vehicleState = {
  vehicle: string
}

const initialState: vehicleState = {
  vehicle: 'carros',
}

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.vehicle = action.payload
    },
  },
})

export const { change } = vehicleSlice.actions

export default vehicleSlice.reducer
