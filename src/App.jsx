import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/500";
import All from "./pages/All";
import CreationSuccess from "./pages/CreationSuccess";
import Home from "./pages/Home";
import NewTest from "./pages/NewTest";
import Result from "./pages/Result";
import TakeTest from "./pages/TakeTest";
import TestInfo from "./pages/TestInfo";
function App() {
  const [marks, setMarks] = useState({ marks: 0, total: 0 });
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/all" element={<All />} />
          <Route
            path="/test/:testId"
            element={<TakeTest setMarks={setMarks} />}
          />
          <Route path="/test/info/:testId" element={<TestInfo />} />
          <Route path="/results" element={<Result marks={marks} />} />
          <Route path="/create_new" element={<NewTest />} />
          <Route path="/created/:subject/:id" element={<CreationSuccess />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
