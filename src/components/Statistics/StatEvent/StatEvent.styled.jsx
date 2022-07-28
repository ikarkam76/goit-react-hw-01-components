import styled from '@emotion/styled'

export const StatEventItem = styled.li`
display: grid;
width: calc((100% / 3) - 2px);
justify-content: center;
border: 1px solid black;
`;

export const StatisticsLabel = styled.span`
color: grey;
`;

export const StatisticsPercentage = styled.span`
font-size: 16px;
color: red;
`;