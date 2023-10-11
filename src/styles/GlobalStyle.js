import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
	    font-family: 'Pretendard7';
	    font-weight: 700;
	    font-display: swap;
	    src: local('Pretendard Bold'), url('./woff2/Pretendard-Bold.woff2') format('woff2'), url('./woff/Pretendard-Bold.woff') format('woff');
    }
    
    @font-face {
	    font-family: 'Pretendard1';
	    font-weight: 100;
	    font-display: swap;
	    src: local('Pretendard Thin'), url('./woff2/Pretendard-Thin.woff2') format('woff2'), url('./woff/Pretendard-Thin.woff') format('woff');
    }

    @font-face {
	font-family: 'Pretendard4';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url('./woff2/Pretendard-Regular.woff2') format('woff2'), url('./woff/Pretendard-Regular.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard3';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url('./woff2/Pretendard-Light.woff2') format('woff2'), url('./woff/Pretendard-Light.woff') format('woff');
}

@font-face {
	font-family: 'Pretendard2';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url('./woff2/Pretendard-ExtraLight.woff2') format('woff2'), url('./woff/Pretendard-ExtraLight.woff') format('woff');
}
`;

export default GlobalStyle;
