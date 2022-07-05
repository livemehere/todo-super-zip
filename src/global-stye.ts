import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      blue: string;
      lightBlue: string;
      red: string;
    };
  }
}

export const lightTheme = {
  colors: {
    bg: "#fff",
    text: "#000",
    blue: "#66BFBF",
    lightBlue: "#EAF6F6",
    red: "#FF0063",
  },
};
export const darkTheme = {
  colors: {
    bg: "#121212",
    text: "#fff",
    blue: "#66BFBF",
    lightBlue: "#EAF6F6",
    red: "#FF0063",
  },
};

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
      box-sizing:border-box;
    }
    input,button,h1,h2,h3,h4,h5,h6,div,span,ul,li{
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
    }
    ul,li{
      padding:0;
    }
    a{
      text-decoration:none;
      color:inherit;
    }
    a:visited{
      color:inherit;
    }

    input:focus{
      border: 1px solid ${({ theme }) => theme.colors.blue};
    }

    body{
        background-color: ${(props) => props.theme.colors.bg}
    }
`;
