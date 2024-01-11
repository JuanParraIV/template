import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import ReactDOM from 'react-dom/client'

import queryClient from '@/Utils/QueryClient'

import App from './App'
import theme from './theme'

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>,
  )
}
