import styled from '@emotion/styled'

export const FriendCard = styled.li`
display: flex;
align-items: center;
padding: 10px;
background-color: #ebe8e8;
border: 1px solid black;
box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
margin-top: 10px;
border-radius: 5px;
`;

export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 10px;
background-color: ${props => {
    return props.isOnline ?'green': 'red';
}}; 

`;

export const FriendAvatar = styled.img`
margin-left: 10px;
border-radius: 10px;
box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
`;

export const FriendName = styled.p`
margin-left: 20px;
font-size: 18px;
font-weight: bold;
`;