import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    @media (max-width: 1040px) {
      padding: 0 16px;
    }
  }
  input {
    color: ${({ theme }) => theme.inputColor};
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.inputColor};
  }
  
`;
