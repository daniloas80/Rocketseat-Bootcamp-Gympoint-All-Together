import { createGlobalStyle } from 'styled-components';

// import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify-redux/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: #F5F5F5;
    color: #444444;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, input, button {
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
