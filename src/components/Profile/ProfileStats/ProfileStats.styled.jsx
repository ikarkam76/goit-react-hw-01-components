import styled from '@emotion/styled'

export const StatsList = styled.ul`
display: flex;
list-style-type: none;
background-color: mistyrose;
padding: 0;
margin: 0;
`;

export const StatsItem = styled.li`
display: grid;
width: calc((100% / 3) - 2px);
justify-content: center;
border: 1px solid black;
`;

export const StatsLabel = styled.span`
color: grey;
`;

export const StatsQuantity = styled.span`
text-align: center;
font-size: 20px;
color: red;
`;
