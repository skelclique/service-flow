import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Authorization } from './pages/Authorization'
import { Scripts } from './pages/Scripts'
import { Devices } from './pages/Devices'
import { CreateScript } from './pages/Scripts/pages/CreateScript'
import { ScriptsLayout } from './layouts/ScriptsLayout'
import { Script } from './pages/Scripts/pages/Script'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'authorization',
        element: <Authorization />,
      },
      {
        path: 'scripts',
        element: <ScriptsLayout />,
        children: [
          {
            path: '/scripts',
            element: <Scripts />,
          },
          {
            path: '/scripts/create',
            element: <CreateScript />,
          },
          {
            path: '/scripts/:id',
            element: <Script />,
          },
        ],
      },
      {
        path: 'devices',
        element: <Devices />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
