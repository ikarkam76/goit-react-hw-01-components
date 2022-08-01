import styled from '@emotion/styled'

export const Profile = styled.div`
  display: grid;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ebe8e8;
  border: 1px solid black;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
`;

export const ProfileDescription = styled.div`
text-align: center;
padding: 10px;
`;

export const ProfileImg = styled.img`
width: 140px;
border-radius: 70px;
background-color: white;
box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
`;

export const ProfileName = styled.p`
font-size: 24px;
font-weight: bold;
`;

export const ProfileTag = styled.p`
font-style: italic;
color: grey;
`;

export const ProfileLocation = styled.p`
color: grey;
`;