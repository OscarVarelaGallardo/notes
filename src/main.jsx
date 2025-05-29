import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner';
import Hero from './components/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero>
      <Toaster />
      <App />
    </Hero>
  </StrictMode>,
)
