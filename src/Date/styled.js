import styled from "styled-components";

export const Paragraph = styled.p`
    text-align: right;
    font-size: 13px;
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.color.darksLateGray};
    padding-right: 20px;
    margin: 10px 0 0 0;
`;