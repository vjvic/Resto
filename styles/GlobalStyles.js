import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* CSS reset */
 /* Box sizing rules */
 *,
*::before,
*::after {
  box-sizing: border-box;
}
  /* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
/* Letter spacing */
h1,
h2,
h3,
h4{
  letter-spacing: 2px;
}
/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  color: inherit;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

body{
 font-family: 'Lato', sans-serif;
 transition: all 0.50s linear;
 line-height: 1.6;
 background-color: /* #FFF9F1 */ #FCFBFE;
 color: ${({ theme }) => theme.text.primary};
}
`;

export default GlobalStyle;
