import { mockProfile } from "@/constants/flashGame";
import styled from "styled-components";

const ProfilePage = () => {
  //   mockProfile;
  return (
    <ProfilePageLayout>
      <UserProfileInfoSection>
        <ProfileImage src={mockProfile.profileImage} />
        <UserNicknameBox>{mockProfile.nickname}</UserNicknameBox>
        <UserDescriptionBox>{mockProfile.introduce}</UserDescriptionBox>
      </UserProfileInfoSection>
    </ProfilePageLayout>
  );
};

export default ProfilePage;

const UserProfileInfoSection = styled.section``;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UserNicknameBox = styled.div``;

const UserDescriptionBox = styled.div``;

const ProfilePageLayout = styled.div`
  @media (min-width: 769px) {
    padding: 0px 32px 32px;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;

  margin-top: 20px;
`;
