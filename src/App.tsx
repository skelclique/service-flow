import { Toaster } from 'react-hot-toast'
import { Router } from './Router'
import { ScriptsContextProvider } from './contexts/ScriptsContext'
import './styles/global.css'

export function App() {
  return (
    <ScriptsContextProvider>
      <Router />
      <Toaster />
    </ScriptsContextProvider>
  )
}
