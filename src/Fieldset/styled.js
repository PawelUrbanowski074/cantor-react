import styled from "styled-components";

export const FieldsetWrapper = styled.fieldset`
    margin: 0px 20px 20px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.frenchPass};
`;

export const Legend = styled.legend`
    text-align: left;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.darksLateGray};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
`;