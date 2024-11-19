import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  font-weight: 600;
  text-shadow: var(--text-shadow-white);
  &:hover {
    cursor: pointer;
  }
`;

const ButtonPrimary = styled(Button)`
  background-color: var(--main-color);
  &:hover {
    background-color: var(--accent-color);
  }
`;

const ButtonSecondry = styled(Button)`
  background-color: var(--sub-color);
  &:hover {
    background-color: var(--accent-color);
  }
`;

const ButtonDisable = styled(Button)`
  background-color: var(--disable);
`;

export { ButtonPrimary, ButtonSecondry, ButtonDisable };
