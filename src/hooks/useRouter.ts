import { useNavigate } from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();

  const routeMain = () => {
    navigate("/main");
  };

  const routeLogin = () => {
    navigate("/login");
  };

  const routeGameView = (game: string) => {
    navigate(`/game?name=${game}`);
  };

  const routeGamelistPage = () => {
    navigate("/gamelist");
  };

  const routeProfilePage = () => {
    navigate("/profile");
  };

  const routeRankPage = () => {
    navigate("/rank");
  };

  // const goToProfileUserClick = (nickname: string) => {
  //   navigate(`/profile?username=${nickname}`);
  // };

  return {
    routeMain,
    routeLogin,
    routeGameView,
    routeGamelistPage,
    routeProfilePage,
    routeRankPage,
  };
};

export default useRouter;
