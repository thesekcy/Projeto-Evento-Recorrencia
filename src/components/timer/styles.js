import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 999;
    margin: 0;
    padding: 0;
    width: 100%;
background: linear-gradient(180deg, #C80050 0%, #9F0037 100%);
-moz-animation-delay: 3.5s;
   -webkit-animation-delay: 3.5s;
   -o-animation-delay: 3.5s;
    animation-delay: 3.5s;
    transform: translateX(0px);
  transition: transform ease-out 0.3s;

@media(max-width: 890px){
  display: none;
}

`


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5%;
  align-items: center;

  @media(max-width: 1300px){
    padding: 0px 2%;

}
`

export const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #FFFFFF;

@media(max-width: 1300px){
  font-size: 20px;
}
`

export const Button = styled.a`
background: linear-gradient(180deg, #00146F 0%, #0B0040 100%);
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
padding: 20px 30px;

@media(max-width: 1300px){
  font-size: 14px;
}
`
