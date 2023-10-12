import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
`

export const LoginCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 30px;
  width: 300px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const LoginLogo = styled.img`
  height: 40px;
  width: 200px;
  align-self: center;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelText = styled.label`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`
export const InputCard = styled.input`
  border: 1px solid #616e7c;
  border-radius: 5px;
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  outline: none;
  padding: 15px;
  margin-bottom: 20px;
  background-color: transparent;
`

export const CheckBoxCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`
export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
`

export const CheckBoxLabel = styled.label`
  font-size: 15px;
  margin-left: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  font-weight: 500;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 100%;
  cursor: pointer;
  color: #ffffff;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
`
export const ErrorMsg = styled.p`
  color: ${props => (props.isDarkTheme ? ' #ff0b37' : '#ff0000')};
  font-size: 15px;
`
