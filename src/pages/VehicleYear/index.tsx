import { useDispatch, useSelector } from 'react-redux'
import MainBox from '../../components/MainBox'
import { useGetYearQuery } from '../../services/api'
import { RootState } from '../../store'
import { setModelCode } from '../../store/reducers/year'

export type Year = {
  codigo: string
  nome: string
}

const VehicleYear = () => {
  const dispatch = useDispatch()

  const handleModelChange = (newModelCode: string) => {
    dispatch(setModelCode(newModelCode))
  }

  const { vehicle } = useSelector((state: RootState) => state.vehicle)
  const { brandCode } = useSelector((state: RootState) => state.model)
  const { modelCode } = useSelector((state: RootState) => state.year)
  const { yearCode } = useSelector((state: RootState) => state.result)

  const { data: year } = useGetYearQuery([vehicle, brandCode, modelCode])

  return (
    <div className="container">
      <MainBox
        children="Selecione o ano do veículo"
        btnChildren="Buscar"
        selectIsVisible={true}
        to={`/VehicleInfo/${yearCode}`}
        resultIsVisible={false}
        year={year}
        onModelChange={handleModelChange}
      />
    </div>
  )
}

export default VehicleYear
