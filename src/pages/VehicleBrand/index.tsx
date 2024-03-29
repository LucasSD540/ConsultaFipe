import MainBox from '../../components/MainBox'
import { useGetBrandQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setBrandCode } from '../../store/reducers/model'

export type Brand = {
  codigo: string
  nome: string
}

const VehicleBrand = () => {
  const dispatch = useDispatch()

  const handleBrandChange = (newBrandCode: string) => {
    dispatch(setBrandCode(newBrandCode))
  }

  const { vehicle } = useSelector((state: RootState) => state.vehicle)
  const { brandCode } = useSelector((state: RootState) => state.model)

  const { data: brand } = useGetBrandQuery(vehicle, { skip: !vehicle })

  return (
    <div className="container">
      <MainBox
        children="Selecione a marca do veículo"
        to={`/VehicleModel/${brandCode}`}
        selectIsVisible={true}
        btnChildren="Buscar"
        resultIsVisible={false}
        brand={brand}
        onBrandChange={handleBrandChange}
      />
    </div>
  )
}

export default VehicleBrand
