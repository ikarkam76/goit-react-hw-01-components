import styled from "@emotion/styled";

export const TableRow = styled.td`
`;

export const TableColumn = styled.tr`
background-color: ${props => {
    return props.index % 2 == 0 ?'White': '#ebe8e8';
}}; 
`;