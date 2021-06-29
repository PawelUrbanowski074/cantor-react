import styled from "styled-components";

export const Timer = styled.div`
    text-align: right;
    font-size: 13px;
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.color.darksLateGray};
    padding: 0 20px 10px 0;
`;