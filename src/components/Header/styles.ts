import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const HeaderDiv = styled.div`
  background-color: ${colors.blue};
  width: 100%;
  height: 162px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`

export const Title = styled.button`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin-right: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &.active,
  &:hover {
    border-bottom: 3px solid #fff;
    margin-bottom: -3px;
  }
`
