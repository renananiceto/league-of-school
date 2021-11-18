import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export default function MostPicky() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      boxPersonas{
        title
        personas{
          title
          btn
          img{
            url
          }
        }
      }
    }
  }
`)

  const { personas } = data.alldata.boxPersonas[0]

  return (
    <S.Container>
      <S.BoxTitle>
        <p>Most Picky</p>
      </S.BoxTitle>
      <S.Wrapper>
        {
          personas.slice(0, 2).map((item) => (
            <S.BoxPickey>
              <img src={item.img.url} alt='#' />
              <p>{item.title}</p>
            </S.BoxPickey>
          ))
        }
      </S.Wrapper>
    </S.Container>
  )
}
