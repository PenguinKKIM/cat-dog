import styled from 'styled-components';
import InputTextLabel from './InputLabel';

interface InputTextType {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputText({ label, placeholder, type, required, onChange }: InputTextType) {
  return (
    <InputTextLabel>
      {label}
      <InputTextField
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
      />
    </InputTextLabel>
  );
}

const InputTextField = styled.input`
  padding: 22px 24px;
  border-radius: 10px;
  border: 1px solid var(--sub-color);
  &:placeholder-shown {
    color: var(--disable);
  }
`;

export default InputText;
