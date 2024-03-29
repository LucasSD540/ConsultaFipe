import { useDispatch, useSelector } from 'react-redux'

import { change } from '../../store/reducers/vehicle'
import { RootState } from '../../store'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const vehicle = useSelector((state: RootState) => state.vehicle.vehicle)

  const handleChangeVehicle = (vehicle: string) => {
    dispatch(change(vehicle))
  }

  const handleChangeNav = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <S.HeaderDiv>
      <S.Container className="container">
        <S.Title onClick={() => handleChangeNav()}>ConsultaFipe</S.Title>
        <nav>
          <ul>
            <S.StyledNavLink
              to="/VehicleBrand/carros"
              onClick={() => handleChangeVehicle('carros')}
              className={vehicle === 'carros' ? 'active' : ''}
            >
              Carros
            </S.StyledNavLink>
            <S.StyledNavLink
              to="/VehicleBrand/motos"
              onClick={() => handleChangeVehicle('motos')}
              className={vehicle === 'motos' ? 'active' : ''}
            >
              Motos
            </S.StyledNavLink>
            <S.StyledNavLink
              to="/VehicleBrand/caminhoes"
              onClick={() => handleChangeVehicle('caminhoes')}
              className={vehicle === 'caminhoes' ? 'active' : ''}
            >
              Caminhões
            </S.StyledNavLink>
          </ul>
        </nav>
      </S.Container>
    </S.HeaderDiv>
  )
}

export default Header
