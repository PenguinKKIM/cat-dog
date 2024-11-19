import { useNavigate } from "react-router-dom";

// 커스텀 훅을 만들려면 use 로 시작해야한다는 린트오류
function useHandleToRoute() {
  const navigate = useNavigate();

  const handleToRoute = (path: string) => {
    navigate(path);
  };

  return handleToRoute;
}

export default useHandleToRoute;
