// main.tsx
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </>
)