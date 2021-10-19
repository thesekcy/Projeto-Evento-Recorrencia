import styled from 'styled-components'
import ImgManBG from '../../images/men-right.png'
import ImgBackBG from '../../images/img-right.png'

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const ManBG = styled.div`
  background-image: url(${ImgManBG});
  background-position: bottom;
  background-repeat: no-repeat;
  background-position-x: 73%;
  background-size: 28%;


  @media screen and (max-width: 1500px) {
    background-position-x: 73%;
  background-size: 32%;
  }


  @media screen and (max-width: 1050px) {
    background-position-x: 85%;
  background-size: 40%;
  }

  @media screen and (max-width: 882px) {
   background-image: none;
  }

`

export const BackBG = styled.div`
  background-image: url(${ImgBackBG});
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: 1300px) {
    background-position-x: 120%;
  }

  @media screen and (max-width: 1050px) {
    background-position-x: 180%;
  }

  @media screen and (max-width: 882px) {
   background-image: none;
  }
`
export const Logo = styled.div`
  .logo-img {
    width: 100%;
    padding: 20px 0;
  }

  @media screen and (max-width: 1300px) {
    .logo-img {
      width: 90%;
    }
  }
`

export const MobileBg = styled.div`
background-image: linear-gradient(180deg, #C80050 0%, #9F0037 100%);
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  display: none;

  @media screen and (max-width: 882px) {
   display: flex;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
`

export const ColumLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media screen and (max-width: 1050px) {
    width: 65%;
  }

  @media screen and (max-width: 882px) {
    width: 100%;
  }
`

export const Date = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 39px;
  text-transform: uppercase;
  color: #c80050;
`
export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 47px;
  text-transform: uppercase;
  color: #00146f;
  display: flex;
  flex-wrap: wrap;
padding-right: 10px;
`

export const Rose = styled.div`
  color: #c80050;
  font-weight: 500;
  padding-right: 10px;
`

export const Description = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #00146f;
  padding-top: 30px;
  width: 70%;
`
export const Button = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(180deg, #c80050 0%, #9f0037 100%);
  width: fit-content;
  padding: 15px 40px;
  margin-top: 30px;
`
