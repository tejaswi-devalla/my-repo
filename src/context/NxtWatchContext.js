import React from "react";

const NxtWatchContext = React.createContext({
  activeTabItem: () => {},
  activeTab: "",
  savedVideos: [],
  addToSavedVideos: () => {},
  removeSavedVideos: () => {},
});
export default NxtWatchContext;
