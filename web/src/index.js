import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

import Routes from 'src/Routes'

import { ContextProvider } from './context'

import './index.css'

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ThemeProvider>,
  document.getElementById('redwood-app')
)
