import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type YearState = {
  modelCode: string
}

const initialState: YearState = {
  modelCode: '',
}

const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    setModelCode: (state, action: PayloadAction<string>) => {
      state.modelCode = action.payload
    },
  },
})

export const { setModelCode } = yearSlice.actions

export default yearSlice.reducer
