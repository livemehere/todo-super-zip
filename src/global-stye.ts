import { createGlobalStyle } from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
    };
  }
}

export const lightTheme = {
  colors: {
    bg: "#fff",
    text: "#000",
  },
};
export const darkTheme = {
  colors: {
    bg: "#121212",
    text: "#fff",
  },
};

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: ${(props) => props.theme.colors.bg}
    }
`;