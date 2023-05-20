import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {
  ArrowsDownUp,
  Devices,
  Clipboard,
  CaretLeft,
  List,
} from '@phosphor-icons/react'

import clsx from 'clsx'

export function SideBar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {isOpen ? (
        <nav
          className="fixed bg-white left-2 top-1/2 -translate-y-1/2 h-64 w-12 border border-neutral-400
          flex flex-col justify-evenly items-center rounded-lg shadow-sm"
        >
          <Item path="/authorization" />
          <Item path="/scripts" />
          <Item path="/devices" />
          <button
            className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-neutral-400 rounded-full bg-white
            flex items-center justify-center text-xs cursor-pointer shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <CaretLeft />
          </button>
        </nav>
      ) : (
        <nav
          className={clsx(
            `fixed bg-white left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 border border-neutral-400 flex flex-col justify-evenly
            items-center  rounded-full transition-transform hover:translate-x-2 blur:translate-x-0`,
          )}
          onClick={() => setIsOpen(true)}
        >
          <Item isClosed path={location.pathname} />
        </nav>
      )}
    </>
  )
}

interface ItemProps {
  path: string
  isClosed?: boolean
}

function Item({ path, isClosed }: ItemProps) {
  const items = [
    {
      path: '/authorization',
      icon: <ArrowsDownUp />,
    },
    {
      path: '/scripts',
      icon: <Clipboard />,
    },
    {
      path: '/devices',
      icon: <Devices />,
    },
  ]

  const item = items.find((item) => path === item.path)

  return (
    <div
      key={path}
      className="cursor-pointer w-full flex items-center justify-center"
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          clsx(
            'w-12 h-12 fixed flex items-center justify-center transition-colors text-xl',
            {
              'bg-white text-gray-500 rounded-full': isClosed,
              'bg-blue-50 text-blue-500': isActive,
            },
          )
        }
      >
        {isClosed ? <List /> : item?.icon}
      </NavLink>
    </div>
  )
}
