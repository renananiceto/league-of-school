import React from 'react'
import * as S from './styles'

import jk from '../../../images/jinks.png'
import vi from '../../../images/Vi2.png'
import wall from '../../../images/fundo.png'
import Logo from '../../../images/logo.png'

export default function Menu() {
  return (
    <S.Container >
      <S.ContainerBox back={wall}>
        <S.Box data-aos="fade-right">
          <img src={jk} alt="#" />
        </S.Box>
        <S.Boox data-aos="fade-left">
          <img src={vi} alt="#" />
        </S.Boox>
      </S.ContainerBox>
      <S.BoxLogo data-aos="fade-down">
          <img src={Logo} alt="#" />
        </S.BoxLogo>
    </S.Container>
  )
}
