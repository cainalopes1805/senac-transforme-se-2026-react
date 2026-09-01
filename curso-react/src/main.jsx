import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {install} from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

import './index.css'
import App from './App.jsx'

install({
  presets: [
    presetAutoprefix(),
    presetTailwind(),
  ],

  theme: {
    extend: {
      colors: {
        primary: '#46b350',
        secondary: '#6cc07f',
        terciary: '#084b0f',
        dark: '#000000',
        white: '#fefefe',
        green_50: '#00350380',
        red: '#c50707',
        green: '#2a8d34',
        darkBlue: '#0e0e0f',
        darkBlue50: '#0e0e0ff5',
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
