import styled from "styled-components";
interface InputFormProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
function InputForm({ children, onSubmit }: InputFormProps) {
  return <InputFormContainer onSubmit={onSubmit}>{children}</InputFormContainer>;
}
const InputFormContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid var(--sub-color);

  @media (min-width: 1024px) {
    width: 50%;
    padding: 80px;
    .input-title {
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: 600;
    }
  }
`;
export default InputForm;
