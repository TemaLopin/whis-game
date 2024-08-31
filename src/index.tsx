import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './shared/fonts/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import DynamicList from './shared/ui/dynamic-list/DynamicList'
import { YMInitializer } from 'react-yandex-metrika'

const metricId = process.env.REACT_APP_YANDEX_METRIC_ID

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <YMInitializer accounts={[+(metricId || 0)]} />
    <App />
    <DynamicList />
  </BrowserRouter>
)
