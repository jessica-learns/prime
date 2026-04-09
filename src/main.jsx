import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PromptBuilder from './components/PromptBuilder.jsx'
import Resources from './pages/Resources.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prompts" element={<PromptBuilder />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
