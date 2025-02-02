import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  isArt={false} />} />
        <Route path="/art" element={<Home  isArt={true} />} />
        <Route index element={<Home isArt={false}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
