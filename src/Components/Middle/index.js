import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export default function Middle() {

  const data = useStaticQuery(graphql`
      query {
        alldata{
          contentMiddles{
            title
            list
          }
        }
      }
   `)

  const { title  ,list } = data.alldata.contentMiddles[0]

  return (
    <S.Component>
      <S.Wrapper>
        <h2>{title}</h2>
        {list.map((item)=>(
          <S.BoxParagraph>
            <p>{item}</p>
          </S.BoxParagraph>
        ))}
      </S.Wrapper>
    </S.Component>
  )
}
