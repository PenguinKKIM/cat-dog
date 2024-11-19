import { ButtonPrimary } from "../Buttons/Buttons";
import InputText from "../Input/InputText";
import InputForm from "../Input/InputForm";
import InputSection from "../Input/InputSection";
import InputLogo from "../Input/InputLogo";
import { ErrorMessage } from "../Message/Message";

function Login() {
  return (
    <InputSection>
      <InputLogo />
      <InputForm>
        <div className="input-title">로그인</div>
        <InputText label="아이디" placeholder="아이디를 입력해주세요" />
        <InputText label="비밀번호" placeholder="비밀번호를 입력해주세요" type="password" />
        <ErrorMessage>아이디나 비밀번호를 확인해주세요!</ErrorMessage>
        <ButtonPrimary>로그인</ButtonPrimary>
      </InputForm>
    </InputSection>
  );
}

export default Login;
