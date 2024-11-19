import styled from "styled-components";
import { ButtonDisable, ButtonPrimary } from "../Buttons/Buttons";
import InputCheckBox from "../Input/InputCheckBox";
import InputForm from "../Input/InputForm";
import InputSection from "../Input/InputSection";
import InputText from "../Input/InputText";
import InputLogo from "../Input/InputLogo";
import useHandleToRoute from "../../hooks/handelToRoute";

function PetRegistration() {
  const handleToRoute = useHandleToRoute();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleToRoute("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <InputSection>
      <InputLogo />
      <InputForm onSubmit={handleSubmit}>
        <div className="input-title">반려동물 등록</div>
        <InputText label="이름" placeholder="반려동물의 이름을 입력해주세요!" required />
        <InputCheckBox label="종류" check1="강아지" check2="고양이" required name="petType" />
        <InputText label="품종" placeholder="품종을 알려주세요" required />
        <InputCheckBox label="성별" check1="남아" check2="여아" required name="petGender" />
        <InputCheckBox label="중성화 여부" check1="예" check2="아니요" required name="petNeutered" />
        <InputButtonContainer>
          <ButtonDisable type="button" onClick={handleCancel}>
            취소하기
          </ButtonDisable>
          <ButtonPrimary type="submit">등록하기</ButtonPrimary>
        </InputButtonContainer>
      </InputForm>
    </InputSection>
  );
}

const InputButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

export default PetRegistration;
