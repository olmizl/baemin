import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";
import Page04 from "./components/Page04";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";
import Page08 from "./components/Page08";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/01" element={<Page01 />} />
          <Route path="/02" element={<Page02 />} />
          <Route path="/03" element={<Page03 />} />
          <Route path="/04" element={<Page04 />} />
          <Route path="/05" element={<Page05 />} />
          <Route path="/06" element={<Page06 />} />
          <Route path="/07" element={<Page07 />} />
          <Route path="/08" element={<Page08 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
