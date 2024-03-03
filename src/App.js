import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Page/Home/Home";
import Upload from "./Page/Upload/Upload";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
