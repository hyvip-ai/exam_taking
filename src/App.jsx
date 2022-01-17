import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from "./pages/All";
import Home from "./pages/Home";
import TestInfo from "./pages/TestInfo";
function App() {
  return (
   <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/test/info/:testId" element={<TestInfo />} />
        </Routes>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
