import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ResultState = {
  yearCode: string
}

const initialState: ResultState = {
  yearCode: '',
}

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setYearCode: (state, action: PayloadAction<string>) => {
      state.yearCode = action.payload
    },
  },
})

export const { setYearCode } = resultSlice.actions

export default resultSlice.reducer
