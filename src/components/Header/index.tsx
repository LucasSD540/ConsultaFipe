import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { change } from '../../store/reducers/vehicle'
import { RootState } from '../../store'

import * as S from './styles'

export type Props = {
  menu: boolean
}

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const vehicle = useSelector((state: RootState) => state.vehicle.vehicle)

  const handleChangeVehicle = (vehicle: string) => {
    dispatch(change(vehicle))
    setMenuOpen(false)
  }

  const handleChangeNav = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <S.HeaderDiv>
      <S.Overlay
        className={menuOpen ? '' : 'not-visible'}
        onClick={() => setMenuOpen(false)}
      />
      <S.Container className="container">
        <S.Title onClick={() => handleChangeNav()}>ConsultaFipe</S.Title>
        <S.HamburguerMenu
          onClick={() => setMenuOpen(!menuOpen)}
          className={menuOpen ? 'not-visible' : ''}
        >
          <span />
          <span />
          <span />
        </S.HamburguerMenu>
        <nav>
          <S.Links>
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
          </S.Links>
        </nav>
        <S.NavMobile className={menuOpen ? 'is-open' : ''}>
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
        </S.NavMobile>
      </S.Container>
    </S.HeaderDiv>
  )
}

export default Header
