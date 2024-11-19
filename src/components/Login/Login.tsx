import { ButtonPrimary, ButtonSecondry } from '../Buttons/Buttons';
import InputText from '../Input/InputText';
import InputForm from '../Input/InputForm';
import InputSection from '../Input/InputSection';
import InputLogo from '../Input/InputLogo';
import { ErrorMessage } from '../Message/Message';
import ownerData from '../../../data/ownerData.json';
import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const login = useAuthStore((state) => state.login);
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const owner = ownerData.find(
      (owner) => owner.ownerEmail === email && owner.ownerPassword === password,
    );
    if (owner) {
      login(owner);
      navigate('/');
    } else {
      setErrorMessage('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  return (
    <InputSection>
      <InputLogo />
      {!loggedInUser ? (
        <InputForm onSubmit={handleLogin}>
          <div className="input-title">로그인</div>
          <InputText
            onChange={(event) => setEmail(event.target.value)}
            label="아이디"
            placeholder="아이디를 입력해주세요"
            required
          />
          <InputText
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <ButtonPrimary type="submit">로그인</ButtonPrimary>
        </InputForm>
      ) : (
        <div>
          안녕하세요 {loggedInUser.ownerName}
          <ButtonSecondry onClick={handleToHome}>홈으로</ButtonSecondry>
        </div>
      )}
    </InputSection>
  );
}

export default Login;
