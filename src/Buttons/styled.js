import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    padding: 5px;
    display: block;
    text-align: center;
`;

export const Button = styled.input`
    padding: 5px 10px;
    margin: 3px;
    background-color: darkslategray;
    color: white;
    border-radius: 5px;

    &:hover {
        background-color: hsl(180, 25%, 30%);
    }

    &:active {
        background-color: hsl(180, 25%, 35%);
    }
`;