import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

type BoxSelectProps = {
  selectIsVisible?: boolean
}

type ParagraphProps = {
  resultIsVisible: boolean
}

export const BoxDiv = styled.div`
  background-color: ${colors.blue};
  max-width: 960px;
  width: 100%;
  height: 400px;
  border-radius: 15px;
`

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BoxTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  margin: 65px 0;
`

export const BoxSelect = styled.select<BoxSelectProps>`
  max-width: 630px;
  width: 100%;
  padding: 10px 50px;
  border-radius: 15px;
  border: none;
  margin-bottom: 65px;
  display: ${(props) => (props.selectIsVisible ? 'block' : 'none')};

  & option {
    background-color: ${colors.background};
    color: ${colors.text};
    padding: 10px;
  }
`

export const BoxParagraph = styled.p<ParagraphProps>`
  display: ${(props) => (props.resultIsVisible ? 'block' : 'none')};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 48px;
`

export const BoxButton = styled(Link)`
  max-width: 350px;
  width: 100%;
  border-radius: 15px;
  border: none;
  background-color: ${colors.green};
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 12px;
`
