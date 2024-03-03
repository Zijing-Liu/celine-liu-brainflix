import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/Upload/UploadPage";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/video/:videoID" element={<HomePage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
