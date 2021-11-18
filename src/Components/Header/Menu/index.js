import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'



export default function Menu() {

  const data = useStaticQuery(graphql`
      query {
        alldata{
          headers{
            menu
            logo{
              url
            }
          }
        }
      }
   `)

  const { menu, logo } = data.alldata.headers[0]
  console.log(data.alldata.headers[0])
  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxLogo>
          <img src={logo.url} alt="#" />
        </S.BoxLogo>
        {menu.map((item, index) => (
          <S.Paragraph key={index}>
            {item}
          </S.Paragraph>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
