import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
  }

  changeTheme = isDarkTheme => {
    this.setState({isDarkTheme: !isDarkTheme})
  }

  saveVideo = videoDetails => {
    const {savedVideosList} = this.state

    const similarVideos = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (similarVideos) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          saveVideo: this.saveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
