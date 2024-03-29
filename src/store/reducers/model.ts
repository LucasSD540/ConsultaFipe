import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModelState = {
  brandCode: string
}

const initialState: ModelState = {
  brandCode: '',
}

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setBrandCode: (state, action: PayloadAction<string>) => {
      state.brandCode = action.payload
    },
  },
})

export const { setBrandCode } = modelSlice.actions

export default modelSlice.reducer
