import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 5px;
    display: block;
    text-align: center;
`;

export const Button = styled.input`
    padding: 5px 10px;
    margin: 3px;
    background-color: ${({ theme }) => theme.color.darksLateGray};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;