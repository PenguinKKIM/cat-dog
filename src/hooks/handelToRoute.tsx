import { useNavigate } from "react-router-dom";

function useHandleToRoute() {
  const navigate = useNavigate();

  const handleToRoute = (path: string) => {
    navigate(path);
  };

  return handleToRoute;
}

export default useHandleToRoute;
