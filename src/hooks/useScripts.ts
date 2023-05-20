import { useContext } from 'react'
import { ScriptsContext } from '../contexts/ScriptsContext'

export function useScripts() {
  const data = useContext(ScriptsContext)

  return data
}
