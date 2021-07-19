import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

      :root {
            --lightgray: #f5f5f5;
            --darkgray: #333333;
            --gray: #999999;
            --red: crimson;
      }
  
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
      }

      html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      body {

      }

      button {
            border-width: 0;
            padding: 10px;
            border-radius: 3px;
            background: var(--darkgray);
            color: white;
      }
`;
