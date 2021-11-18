import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  -webkit-box-shadow: 1px 11px 11px 5px rgba(0,0,0,0.23); 
  box-shadow: 1px 11px 11px 5px rgba(0,0,0,0.23);
`

export const Wrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 45vh;
`

export const BoxPickey = styled.div`
  width: 20%;
  height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  p{
    font-size: 30px;
  }
  img{
    width: 100%;
  }
`

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  p{
    font-size: 30px;
  }
`