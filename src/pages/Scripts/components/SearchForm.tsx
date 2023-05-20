import { MagnifyingGlass, Plus } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function SearchForm() {
  return (
    <div className="flex gap-4 h-10">
      <div className="flex flex-1 relative">
        <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-sm" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="flex-1 rounded-md border border-neutral-500 pl-10 px-4 text-sm focus:border-blue-500"
        />
      </div>
      <NavLink
        to="create"
        className="flex text-md font-medium bg-blue-600 hover:bg-blue-500 text-white gap-1 items-center px-3 rounded-md "
      >
        <Plus weight="bold" />
      </NavLink>
    </div>
  )
}
