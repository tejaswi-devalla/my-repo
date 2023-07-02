import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginRoute from "./components/LoginRoute";
import HomeRoute from "./components/HomeRoute";
import TrendingRoute from "./components/TrendingRoute";
import GamingRoute from "./components/GamingRoute";
import SavedVideosRoute from "./components/SavedVideosRoute";
import VideoItemDetailsRoute from "./components/VideoItemDetailsRoute";
import NotFoundRoute from "./components/NotFoundRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import NxtWatchContext from "./context/NxtWatchContext";

import "./App.css";

// Replace your code here
class App extends Component {
  state = {
    activeTab: "Home",
    savedVideos: [],
  };

  activeTabItem = (active) => {
    this.setState({ activeTab: active });
  };

  addToSavedVideos = (videoDetails) => {
    const { savedVideos } = this.state;
    const videoObject = savedVideos.find((each) => each.id === videoDetails.id);
    if (videoObject) {
      this.setState((prev) => ({
        savedVideos: [...prev.savedVideos],
      }));
    } else {
      this.setState({ savedVideos: [...savedVideos, videoDetails] });
    }
  };

  removeSavedVideos = (id) => {
    const { savedVideos } = this.state;
    const updatedVideos = savedVideos.filter((each) => each.id !== id);
    this.setState({ savedVideos: updatedVideos });
  };

  render() {
    const { activeTab, savedVideos } = this.state;
    console.log(savedVideos);

    return (
      <NxtWatchContext.Provider
        value={{
          activeTabItem: this.activeTabItem,
          activeTab,
          addToSavedVideos: this.addToSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    );
  }
}
export default App;
