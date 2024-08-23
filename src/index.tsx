import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './shared/fonts/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import DynamicList from './shared/ui/dynamic-list/DynamicList'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <DynamicList />
    </BrowserRouter>
  </React.StrictMode>
)
