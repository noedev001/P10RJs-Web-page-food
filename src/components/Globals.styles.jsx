import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

html{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    font-size: 15px;
}
`;
