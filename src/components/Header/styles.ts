import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;

  &.not-visible {
    display: none;
  }
`

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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`
export const Links = styled.ul`
  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;

    ${Links} {
      display: none;
    }
  }
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
}
`

export const HamburguerMenu = styled.div`
  max-width: 32px;
  width: 100%;
  position: absolute;
  right: 0;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: #fff;
    margin-bottom: 4px;
  }

  &.not-visible {
    display: none;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${colors.background};
    height: 100vh;
    width: 150px;
    z-index: 2;
  }

  > ul > ${StyledNavLink} {
    color: #000;
    padding-top: 16px;
    margin-left: 8px;;
    font-size: 20px;

    &.active,
    &:hover {
      border-bottom: 3px solid #000;
      margin-bottom: -3px;
    }
  }
}
`
