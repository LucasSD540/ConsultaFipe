import { useSelector } from 'react-redux'

import { useGetModelQuery } from '../../services/api'
import { RootState } from '../../store'
import MainBox from '../../components/MainBox'

export type Modelo = {
  codigo: string
  nome: string
}

export type Model = {
  modelos: Modelo[]
}

const VehicleModel = () => {
  const { vehicle } = useSelector((state: RootState) => state.vehicle)
  const { brandCode } = useSelector((state: RootState) => state.model)
  const { modelCode } = useSelector((state: RootState) => state.year)

  const { data: model } = useGetModelQuery([vehicle, brandCode], {
    skip: !brandCode,
  })

  const listModel: Model | undefined =
    model && Array.isArray(model.modelos)
      ? { modelos: model.modelos }
      : undefined

  return (
    <div className="container">
      <MainBox
        children="Selecione o modelo do veículo"
        btnChildren="Buscar"
        selectIsVisible={true}
        to={`/VehicleYear/${modelCode}`}
        resultIsVisible={false}
        model={listModel}
      />
    </div>
  )
}

export default VehicleModel
