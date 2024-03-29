import MainBox from '../../components/MainBox'

import * as S from './styles'

const Home = () => {
  return (
    <>
      <div className="container">
        <MainBox
          children="Encontre o valor da tabela fipe do seu veículo"
          btnChildren="Iniciar busca"
          to="/VehicleBrand/carros"
          selectIsVisible={false}
          resultIsVisible={false}
        />
        <S.Title>O que é a Tabela FIPE?</S.Title>
        <S.Paragraph>
          A Tabela FIPE, sigla para Fundação Instituto de Pesquisas Econômicas,
          é uma referência nacional para consulta de preços médios de veículos
          no Brasil. Ela é amplamente reconhecida como uma fonte confiável de
          informações sobre valores de carros, motos e caminhões, utilizada por
          compradores, vendedores, concessionárias e instituições financeiras.
        </S.Paragraph>
        <S.Title>Como funciona:</S.Title>
        <S.Paragraph>
          A Tabela FIPE é atualizada mensalmente e apresenta os valores médios
          de mercado dos veículos, considerando seu ano de fabricação, modelo e
          opcionais. Esses valores são calculados com base em pesquisas
          realizadas em diversas regiões do país, levando em conta fatores como
          desvalorização, demanda e oferta do mercado.
        </S.Paragraph>
        <S.Title>Utilização:</S.Title>
        <S.Paragraph>
          Para quem está comprando ou vendendo um veículo, a Tabela FIPE é uma
          ferramenta essencial para verificar se o preço proposto está de acordo
          com a média de mercado, auxiliando assim na negociação justa e
          transparente. Além disso, é frequentemente utilizada por seguradoras
          para cálculo de prêmios de seguros e por instituições financeiras para
          determinar valores de financiamento.
        </S.Paragraph>
        <S.Title>Importância:</S.Title>
        <S.Paragraph>
          A transparência proporcionada pela Tabela FIPE contribui para um
          mercado de veículos mais equilibrado e justo, fornecendo informações
          atualizadas e confiáveis para todas as partes envolvidas em transações
          automotivas.
        </S.Paragraph>
        <S.Paragraph>
          Ao consultar a Tabela FIPE, tenha em mente que os valores apresentados
          são apenas uma referência e podem variar de acordo com o estado de
          conservação, quilometragem e outros fatores específicos de cada
          veículo.
        </S.Paragraph>
      </div>
    </>
  )
}

export default Home
