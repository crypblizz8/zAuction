import styled from 'styled-components'

export const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1rem 10rem;
  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }
`
export const HeadingTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
`

export const NetworkTitle = styled.p`
  font-size: 1em;
  color: #969696;
  margin-left: 1em;
  font-weight: 300;
`
export const ConnectButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  border: transparent;
`

export const FullWidthButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 8px;
  width: 250px;
  height: 40px;
  border: transparent;
`

export const FullWidthWhiteButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 8px;
  width: 250px;
  height: 40px;
  border: 1px solid black;
  margin-right: 8px;
`

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 8px;
  width: 45%;
  margin-top: 16px;
  margin-bottom: 4px;
  height: 40px;
  border: transparent;
`

export const HideButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 8px;
  width: 45%;
  margin-top: 16px;
  margin-bottom: 4px;
  height: 40px;
  border: 1px solid black;
  margin-left: 8px;
  margin-right: 4px;
`

export const MintButton = styled.button`
  background-color: transparent;
  color: black;
  border-radius: 8px;
  border-color: #9AF5CC;
  border-width: 1px;
  width: 100px;
  height: 40px;
  margin-right: 8px;
`
export const AddressContainer = styled.div`
  background-color: #E2E2E2;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  border: transparent;
`