import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import pretendardRegular from "/font/Pretendard-Regular.woff";
import PretendardSemiBold from "/font/Pretendard-SemiBold.woff";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root{
    --text-primary: #303438;
    --text-secoundry: #979797;
    --text-tertiary: #D9D9D9;
    --success-color: #009905;
    --error-color: #E20000;
    --main-color: #F9950F;
    --sub-color: #FFC000;
    --accent-color: #FCE798;
    --disable: #D9D9D9;
    --white: #fcfcfc;
    --text-shadow-white:  rgb(255, 255, 255) 3px 0px 0px, rgb(255, 255, 255) 2.83487px 0.981584px 0px,
      rgb(255, 255, 255) 2.35766px 1.85511px 0px, rgb(255, 255, 255) 1.62091px 2.52441px 0px,
      rgb(255, 255, 255) 0.705713px 2.91581px 0px, rgb(255, 255, 255) -0.287171px 2.98622px 0px,
      rgb(255, 255, 255) -1.24844px 2.72789px 0px, rgb(255, 255, 255) -2.07227px 2.16926px 0px,
      rgb(255, 255, 255) -2.66798px 1.37182px 0px, rgb(255, 255, 255) -2.96998px 0.42336px 0px,
      rgb(255, 255, 255) -2.94502px -0.571704px 0px, rgb(255, 255, 255) -2.59586px -1.50383px 0px,
      rgb(255, 255, 255) -1.96093px -2.27041px 0px, rgb(255, 255, 255) -1.11013px -2.78704px 0px,
      rgb(255, 255, 255) -0.137119px -2.99686px 0px, rgb(255, 255, 255) 0.850987px -2.87677px 0px,
      rgb(255, 255, 255) 1.74541px -2.43999px 0px, rgb(255, 255, 255) 2.44769px -1.73459px 0px,
      rgb(12, 6, 6) 2.88051px -0.838247px 0px;
    --svg-main-color : invert(40%) sepia(100%) saturate(493%) hue-rotate(333deg) brightness(94%) contrast(94%);
  }
  @font-face {
    font-family: 'Pretendard_Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Pretendard_Regular'), url(${pretendardRegular}) format('woff');
  }
  @font-face {
    font-family: 'Pretendard_SemiBold';
    font-style: normal;
    font-weight: 600;
    src: local('Pretendard_SemiBold'), url(${PretendardSemiBold}) format('woff');
  }
  body{
    font-family: "Pretendard_Regular";
    color: var(--text-primary);
  }
  h1{
    font-size: 1.3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
