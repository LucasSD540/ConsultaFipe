import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Title = styled.h4`
  color: ${colors.title};
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const Paragraph = styled.p`
  color: ${colors.text};
  line-height: 22px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
