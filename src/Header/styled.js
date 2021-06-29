import styled from "styled-components";

export const HeaderWrapper = styled.header`
    padding: 0 30px;
    text-align: center;
    color: ${({ theme }) => theme.color.babyBlue};
    background-color: ${({ theme }) => theme.color.darksLateGray};
    border-radius: 10px;
`;