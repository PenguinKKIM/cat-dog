import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { ButtonPrimary } from "./Buttons";

function LoginOutButton() {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/")
  };

  const handleLogIn = () => {
    navigate("/login")
  };
  return (
    <>
      {loggedInUser ? (
        <ButtonPrimary onClick={handleLogout}>로그아웃</ButtonPrimary>
      ) : (
        <ButtonPrimary onClick={handleLogIn}>로그인</ButtonPrimary>
      )}
    </>
  );
}

export default LoginOutButton;