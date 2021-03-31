import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

	:root {
		--blue: #176BEF;
		--red: #FF3E30;
		--yellow: #F7B529;
		--green: #179C52;
		--greyLight: #eeeeee;

		--container: 100rem;

		--small: 1.5rem;
		--medium: 3rem;
		--large: 5rem;
	}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
		background: var(--greyLight);
		color: var(--blue);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

	p, a {
		font-size: 2rem;
		line-height: var(--medium);
	}

	a {
		color: var(--red);
	}
`

export default GlobalStyles
