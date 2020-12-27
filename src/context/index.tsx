import { FunctionComponent } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'assets/styles/global'
import theme from 'assets/styles/theme'

const Provider: FunctionComponent = ({ children }) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </HelmetProvider>
)

export default Provider
