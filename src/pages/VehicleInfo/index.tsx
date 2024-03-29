import { useDispatch, useSelector } from 'react-redux'
import MainBox from '../../components/MainBox'
import { setYearCode } from '../../store/reducers/result'
import { RootState } from '../../store'
import { useGetResultQuery } from '../../services/api'

export type Result = {
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
}

const VehicleInfo = () => {
  const dispatch = useDispatch()

  const handleYearChange = (newYearCode: string) => {
    dispatch(setYearCode(newYearCode))
  }

  const { vehicle } = useSelector((state: RootState) => state.vehicle)
  const { brandCode } = useSelector((state: RootState) => state.model)
  const { modelCode } = useSelector((state: RootState) => state.year)
  const { yearCode } = useSelector((state: RootState) => state.result)

  const { data: result } = useGetResultQuery([
    vehicle,
    brandCode,
    modelCode,
    yearCode,
  ])

  return (
    <div className="container">
      <MainBox
        children="Dados do veículo encontrado:"
        btnChildren="Finalizar"
        to="/"
        selectIsVisible={false}
        resultIsVisible={true}
        result={result}
        onYearChange={handleYearChange}
      />
    </div>
  )
}

export default VehicleInfo
