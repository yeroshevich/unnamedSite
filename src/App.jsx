import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "@types/react";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} component={<App/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
