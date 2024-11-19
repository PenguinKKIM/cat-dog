import styled from "styled-components";

function InputLogo() {
  return (
    <InputLogoContainer>
      <img src="images/logos/logo_color.png" alt="댕냥꽁냥 로고" />
      <div>안녕하세요 댕냥꽁냥 입니다!</div>
    </InputLogoContainer>
  );
}

const InputLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    width: 200px;
  }
  div {
    font-size: 0.875rem;
  }
`;

export default InputLogo;
