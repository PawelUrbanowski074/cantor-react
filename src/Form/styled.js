import styled from "styled-components";


export const FormWrapper = styled.form`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.babyBlue};
    border-radius: 15px; 
    border-style:  solid;
    border-color: ${({ theme }) => theme.color.darksLateGray};
`;