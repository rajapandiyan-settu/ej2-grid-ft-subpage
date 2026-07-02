import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SelectionTabs from './SelectionTabs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectionTabs />
  </StrictMode>,
)
