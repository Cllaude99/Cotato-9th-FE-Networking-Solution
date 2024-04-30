import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}
body{
  line-height: 1.2;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-family: "KakaoRegular";
}
button{
  border: 0;
  cursor: pointer;
}
`;
