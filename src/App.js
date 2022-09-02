import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import React from "react";
import MainPage from "./pages/MainPage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
