import styled from "styled-components";
import InputTextLabel from "./InputLabel";

interface CheckBoxType {
  label: string;
  check1: string;
  check2: string;
  name: string;
  required?: boolean;
}

function InputCheckBox({ label, check1, check2, required, name }: CheckBoxType) {
  return (
    <InputTextLabel>
      {label}
      <RadioContainer>
        <RadioInnerContainer>
          <input type="radio" id="contactChoice1" name={name} value={check1} required={required} />
          <label htmlFor="contactChoice1">{check1}</label>
        </RadioInnerContainer>

        <RadioInnerContainer>
          <input type="radio" id="contactChoice2" name={name} value={check2} required={required} />
          <label htmlFor="contactChoice2">{check2}</label>
        </RadioInnerContainer>
      </RadioContainer>
    </InputTextLabel>
  );
}

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 22px 24px;
  border-radius: 10px;
  border: 1px solid var(--sub-color);
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const RadioInnerContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export default InputCheckBox;
