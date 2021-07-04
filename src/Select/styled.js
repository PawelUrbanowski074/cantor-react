import styled from "styled-components";

export const SelectWrapper = styled.select`
    align-self: center;
    padding-left: 10px;
    margin: 0 10px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darksLateGray};
`;

export const Option = styled.option`
    background-color: ${({ theme }) => theme.color.darksLateGray};
`;
