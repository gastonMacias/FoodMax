import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { RecetasProvider } from "./context/RecetasContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecetasProvider>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
    </RecetasProvider>
  </StrictMode>,
)
