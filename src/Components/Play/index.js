import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'


export default function Play() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      footers{
        img{
          url
        }
      }
    }
  }
`)

  const { img } = data.alldata.footers[0]

  return (
    <S.Container>
      <S.Wrapper>
        {img.map((item) => (
          <S.BoxMap>
            <img src={item.url} alt="#" />
          </S.BoxMap>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
