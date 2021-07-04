import styled from "styled-components";

export const HeaderWrapper = styled.header`
    padding: 0 30px;
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.color.babyBlue};
    background-color: ${({ theme }) => theme.color.darksLateGray};
    border-radius: 10px;
`;