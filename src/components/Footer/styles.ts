import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
  width: 100%;
  height: 100px;
  margin-top: 120px;
`

export const FooterP = styled.div`
  font-size: 16px;
  color: #fff;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const ApiLink = styled(Link)`
  color: #fff;
`
