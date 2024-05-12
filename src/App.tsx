import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import GamePreview from "@/pages/GamePreview";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="game" element={<GamePreview />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
