import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import Layout from "@/pages/Layout";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import GamelistPage from "./pages/GamelistPage";
import GameBoardPage from "./pages/GameBoardPage";
import ProfilePage from "./pages/ProfilePage";
import RankPage from "./pages/RankPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="gamelist" element={<GamelistPage />} />
          <Route path="gameBoard" element={<GameBoardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="rank" element={<RankPage />} />
          {/* <Route path="game/*" element={<GamePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
