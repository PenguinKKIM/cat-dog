import petData from '../../../data/petRegData.json';
import styled from 'styled-components';
import { ButtonPrimary } from '../Buttons/Buttons';

function PetRegistrationList() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  const userPets = petData.filter((pet) => pet.ownerId === loggedInUser?.id);

  return (
    <PetListSection>
      <PetListContainer>
        <h1>{loggedInUser?.ownerName}님의 Pet List</h1>
        {userPets.length > 0 ? (
          <PetListUl>
            {userPets.map((pet) => {
              return (
                <PetListLi key={pet.id}>
                  <div className='inner-container'>
                    <PetProfileContainer>
                      <h2>{pet.petName}</h2>
                      <PetProfileImg src={pet.petImage} alt={pet.petName} />
                    </PetProfileContainer>
                    <PetListInfoContainer>
                      <PetListInfo><p>종류: </p> {pet.petCatOrDog === 'cat' ? '고양이' : '강아지'}</PetListInfo>
                      <PetListInfo><p>품종: </p> {pet.petBreed}</PetListInfo>
                      <PetListInfo><p>성별: </p> {pet.petGender === 'male' ? '수컷' : '암컷'}</PetListInfo>
                      <PetListInfo><p>중성화: </p> {pet.petIsNeutering ? '중성화 완료' : '중성화 안 됨'}</PetListInfo>
                    </PetListInfoContainer>
                  </div>
                  <ButtonPrimary>수정하기</ButtonPrimary>
                </PetListLi>
              );
            })}
          </PetListUl>
        ) : (
          <PetListContainer>등록된 반려동물이 없습니다.</PetListContainer>
        )}
      </PetListContainer>
    </PetListSection >
  );
}

const PetProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PetProfileImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const PetListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PetListLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--sub-color);
  .inner-container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
  .inner-container{
    flex-direction: row;
    align-items: flex-end;
    gap: 2rem;
  }
  }
`;

const PetListInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PetListInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PetListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const PetListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid var(--sub-color);
`;

export default PetRegistrationList;
