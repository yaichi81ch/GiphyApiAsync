import React from "react";

import ImageList from "./containers/imageList";
import Search from "./containers/Search";

const App = () => {
  return (
    <div className="body">
      <h2 className="title">Find Your GIFs!</h2>
      <Search />
      <ImageList />
    </div>
  );
};

export default App;
