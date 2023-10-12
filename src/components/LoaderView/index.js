import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const LoaderColor = isDarkTheme ? '#ffffff' : '#000000'

      return (
        <LoaderContainer data-testid="loader">
          <Loader type="ThreeDots" color={LoaderColor} height="50" width="50" />
        </LoaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoaderView
