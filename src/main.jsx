import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Burayı değiştirdik: ThemeProvider yerine CombinedContextProvider kullanıyoruz
import { CombinedContextProvider } from './Context.jsx' 
import './i18n'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider yerine CombinedContextProvider yazdık */}
    <CombinedContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CombinedContextProvider>
  </StrictMode>,
)