import { ReactNode, createContext, useEffect, useState } from 'react'
import { Category } from '../components/CategoryPicker'

interface Script {
  id: string
  title: string
  description: string
  categories: Category[]
}

interface ScriptsContextType {
  scripts: Script[]
  createScript: (data: any) => void
}

export const ScriptsContext = createContext({} as ScriptsContextType)

interface ScriptsContextProviderProps {
  children: ReactNode
}

export function ScriptsContextProvider({
  children,
}: ScriptsContextProviderProps) {
  const [scripts, setScripts] = useState<Script[]>(
    JSON.parse(
      String(localStorage.getItem('@service-flow:scripts-state-1.0.0')),
    ) || [],
  )

  function createScript(data: any) {
    setScripts((state) => [...state, data])
  }

  useEffect(() => {
    localStorage.setItem(
      '@service-flow:scripts-state-1.0.0',
      JSON.stringify(scripts),
    )
  }, [scripts])

  return (
    <ScriptsContext.Provider value={{ scripts, createScript }}>
      {children}
    </ScriptsContext.Provider>
  )
}
