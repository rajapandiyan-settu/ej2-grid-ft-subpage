import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EditingSamplesTabs from './EditingSamplesTabs.jsx'
import { registerLicense } from '@syncfusion/ej2-base'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditingSamplesTabs />
  </StrictMode>
)
