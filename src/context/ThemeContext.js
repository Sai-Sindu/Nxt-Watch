import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
  saveVideo: () => {},
})

export default ThemeContext
