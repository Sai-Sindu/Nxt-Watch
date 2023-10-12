import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginRouteContainer,
  LoginCard,
  LoginLogo,
  LoginForm,
  LabelText,
  InputCard,
  CheckBoxCard,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    passwordType: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = event => {
    if (event.target.checked) {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const loginApiUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(loginApiUrl, options)
    const loginData = await response.json()
    console.log(loginData.error_msg)
    if (response.ok) {
      this.onLoginSuccess(loginData.jwt_token)
    } else {
      console.log(loginData)
      console.log(loginData.error_msg)
      this.onLoginFailure(loginData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      passwordType,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const loginLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginRouteContainer isDarkTheme={isDarkTheme}>
              <LoginCard isDarkTheme={isDarkTheme}>
                <LoginLogo src={loginLogo} alt="website logo" />
                <LoginForm onSubmit={this.onSubmitLoginForm}>
                  <LabelText htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LabelText>
                  <InputCard
                    type="text"
                    placeholder="Username"
                    value={username}
                    id="username"
                    onChange={this.onChangeUsername}
                    isDarkTheme={isDarkTheme}
                  />
                  <LabelText htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LabelText>
                  <InputCard
                    type={passwordType}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    isDarkTheme={isDarkTheme}
                  />
                  <CheckBoxCard>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onClickCheckBox}
                    />
                    <CheckBoxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckBoxCard>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && (
                    <ErrorMsg isDarkTheme={isDarkTheme}>*{errorMsg}</ErrorMsg>
                  )}
                </LoginForm>
              </LoginCard>
            </LoginRouteContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
