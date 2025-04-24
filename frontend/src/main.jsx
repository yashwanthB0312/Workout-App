import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/workoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutContextProvider>
      <App/>
    </WorkoutContextProvider>
  </StrictMode>,
)
