import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 確保這行存在，才能顯示顏色與排版
import App from './App.jsx' // 確保這裡對應到您的主程式檔案

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
