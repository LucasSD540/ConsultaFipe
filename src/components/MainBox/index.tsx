import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Brand } from '../../pages/VehicleBrand'
import { Model } from '../../pages/VehicleModel'
import { Year } from '../../pages/VehicleYear'
import { Result } from '../../pages/VehicleInfo'
import { setBrandCode } from '../../store/reducers/model'
import { setModelCode } from '../../store/reducers/year'
import { setYearCode } from '../../store/reducers/result'

import * as S from './styles'

type Props = {
  children: string
  btnChildren: string
  to: string
  selectIsVisible?: boolean
  resultIsVisible: boolean
  brand?: Brand[]
  model?: Model
  year?: Year[]
  result?: Result
  onBrandChange?: (newBrandCode: string) => void
  onModelChange?: (newModelCode: string) => void
  onYearChange?: (newYearCode: string) => void
}

const MainBox = ({
  children,
  btnChildren,
  to,
  selectIsVisible,
  resultIsVisible,
  brand,
  model,
  year,
  result,
  onBrandChange,
  onModelChange,
  onYearChange,
}: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [selectedValue, setSelectedValue] = useState('')

  let listToIterate: any

  const handleBrandSelection = useCallback(
    (selectedBrandCode: string) => {
      dispatch(setBrandCode(selectedBrandCode))
    },
    [dispatch]
  )

  const handleModelSelection = useCallback(
    (selectedModelCode: string) => {
      dispatch(setModelCode(selectedModelCode))
    },
    [dispatch]
  )

  const handleYearSelection = useCallback(
    (selectedYearCode: string) => {
      dispatch(setYearCode(selectedYearCode))
    },
    [dispatch]
  )

  const handleNavigateHome = () => {
    navigate('/')
    window.location.reload()
  }

  const location = useLocation()
  const isBrandPage = location.pathname.startsWith('/VehicleBrand')
  const isModelPage = location.pathname.startsWith('/VehicleModel')
  const isYearPage = location.pathname.startsWith('/VehicleYear')
  const isInfoPage = location.pathname.startsWith('/VehicleInfo')

  useEffect(() => {
    let initialValue = ''

    if (location.pathname.startsWith('/VehicleBrand')) {
      initialValue = brand && brand.length > 0 ? brand[0].codigo : ''
      handleBrandSelection(initialValue)
    } else if (location.pathname.startsWith('/VehicleModel')) {
      initialValue =
        model?.modelos && model?.modelos.length > 0
          ? model?.modelos[0].codigo
          : ''
      handleModelSelection(initialValue)
    } else if (location.pathname.startsWith('/VehicleYear')) {
      initialValue = year && year.length > 0 ? year[0].codigo : ''
      handleYearSelection(initialValue)
    }

    setSelectedValue(initialValue)
  }, [
    brand,
    handleBrandSelection,
    handleModelSelection,
    handleYearSelection,
    location.pathname,
    model?.modelos,
    year,
  ])

  if (isBrandPage) {
    listToIterate = brand
  } else if (isModelPage) {
    listToIterate = model?.modelos
  } else if (isYearPage) {
    listToIterate = year
  }

  console.log(selectedValue)

  return (
    <S.BoxDiv>
      <S.DivFlex>
        <S.BoxTitle>{children}</S.BoxTitle>
        <S.BoxSelect
          name="brand"
          id="brand"
          selectIsVisible={selectIsVisible}
          onChange={(event) => {
            if (isBrandPage) {
              handleBrandSelection(event.target.value)
            } else if (isModelPage) {
              handleModelSelection(event.target.value)
            } else if (isYearPage) {
              handleYearSelection(event.target.value)
            }
          }}
        >
          {Array.isArray(listToIterate) &&
            listToIterate.map((item) => (
              <option key={item.codigo} value={item.codigo}>
                {item.nome}
              </option>
            ))}
        </S.BoxSelect>
        <S.BoxParagraph resultIsVisible={resultIsVisible}>
          <p>
            O veículo é um(a) {result?.Marca} {result?.Modelo}{' '}
            {result?.AnoModelo} , com o valor de {result?.Valor}.
          </p>
        </S.BoxParagraph>
        <S.BoxButton
          to={to}
          onClick={() => {
            if (isInfoPage) {
              handleNavigateHome()
            }
          }}
        >
          {btnChildren}
        </S.BoxButton>
      </S.DivFlex>
    </S.BoxDiv>
  )
}

export default MainBox
