import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './shared/fonts/style.css'
import MainPage from './pages/main'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><MainPage/></React.StrictMode>)
