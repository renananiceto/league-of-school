import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 flex-direction: column;
`

export const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`


export const BoxMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 40vh;

  p{
    font-size: 30px;
  }

  button{
    border: none;
    background-color: orange;
    font-size: 25px;
    cursor: pointer;
    width: 40%;
    border-radius: 25px;
    transition: 4s;
    :hover{
      background-color: red;
      transition: 4s;
    }
  }

  img{
    width: 100%;
  }
`


export const BoxTitle = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  font-size: 30px;
`