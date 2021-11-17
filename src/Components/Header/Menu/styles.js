import styled from "styled-components";


export const Container = styled.div`

`
export const ContainerBox = styled.div`
  /* width: 100%; */
  display: flex;
  background-color: black;
  background-image: url(${props => props.back});
  background-repeat: no-repeat;
  background-position: center;
`

export const Box = styled.div`  
  width: 60%;
`
export const Boox = styled.div`
  position: absolute;
  right: 0;
  width: 998px;
  overflow: hidden;
`
export const BoxLogo = styled.div`
position: absolute;
left: 675px;
display: flex;
justify-content: center;
z-index: 99;
top: 306px;
`