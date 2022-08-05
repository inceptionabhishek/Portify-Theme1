import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ColorModeScript />
    <App />
  </BrowserRouter>
)
