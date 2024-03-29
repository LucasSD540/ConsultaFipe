import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Brand } from '../pages/VehicleBrand'
import { Model } from '../pages/VehicleModel'
import { Year } from '../pages/VehicleYear'
import { Result } from '../pages/VehicleInfo'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://parallelum.com.br/fipe/api/v1',
  }),
  endpoints: (builder) => ({
    getBrand: builder.query<Brand[], string>({
      query: (vehicle) => `${vehicle}/marcas`,
    }),
    getModel: builder.query<Model, [string, string]>({
      query: (args: [string, string]) => {
        const [vehicle, brandCode] = args
        return `${vehicle}/marcas/${brandCode}/modelos`
      },
    }),
    getYear: builder.query<Year[], [string, string, string]>({
      query: (args: [string, string, string]) => {
        const [vehicle, brandCode, modelCode] = args
        return `${vehicle}/marcas/${brandCode}/modelos/${modelCode}/anos`
      },
    }),
    getResult: builder.query<Result, [string, string, string, string]>({
      query: (args: [string, string, string, string]) => {
        const [vehicle, brandCode, modelCode, yearCode] = args
        return `${vehicle}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
      },
    }),
  }),
})

export const {
  useGetBrandQuery,
  useGetModelQuery,
  useGetYearQuery,
  useGetResultQuery,
} = api

export default api
