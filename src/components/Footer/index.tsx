import * as S from './styles'

const Footer = () => (
  <S.FooterDiv>
    <S.FooterP>
      <p>
        Os dados dos veículos foram consumidos da api criada pelo Deivid
        Fortuna:
      </p>
      <S.ApiLink target="blank" to="https://deividfortuna.github.io/fipe/">
        https://deividfortuna.github.io/fipe/
      </S.ApiLink>
    </S.FooterP>
  </S.FooterDiv>
)

export default Footer
