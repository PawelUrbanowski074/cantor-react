import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.babyBlue};
    border-radius: 15px; 
    border-style:  solid;
    border-color: ${({ theme }) => theme.color.darksLateGray};
`;

export const Label = styled.label`
    display: grid;
    grid-gap: 10px;
    margin: 0 10px;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;

export const Span = styled.span`
    align-self: center;
    height: 30px;
    margin: 5px 10px;
    font-size: 17px;
    font-weight: bold;
`;

export const Cash = styled.input`
    align-self: center;
    text-align: center;
    height: 30px;
    margin: 0px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darksLateGray};

    &::placeholder{
        color:${({ theme }) => theme.color.white};
    }
`;

export const ApiStatus = styled.div`
    background-color: ${({ theme }) => theme.color.frenchPass};
    border: 2px inset  ${({ theme }) => theme.color.darksLateGray};
    border-radius: 10px;margin: 30px;
    padding: 30px;
    text-align: center;
    font-size: 17px;
`;