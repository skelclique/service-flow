import React, { useState, Fragment } from 'react'

import { Combobox } from '@headlessui/react'

import { v4 as uuidv4 } from 'uuid'

import clsx from 'clsx'

const categories = [
  {
    id: uuidv4(),
    name: 'Renovação',
    color: 'yellow',
  },
  {
    id: uuidv4(),
    name: 'Suporte',
    color: 'blue',
  },
  {
    id: uuidv4(),
    name: 'Venda',
    color: 'green',
  },
]

export interface Category {
  id: string
  name: string
  color: string
}

interface CategoryPickerProps {
  selected: Category[]
  setSelected: React.Dispatch<React.SetStateAction<Category[]>>
}

export function CategoryPicker({ selected, setSelected }: CategoryPickerProps) {
  const [query, setQuery] = useState('')

  const filter =
    query === ''
      ? categories
      : categories.filter((category) => {
          return category.name.toLowerCase().startsWith(query.toLowerCase())
        })

  return (
    <Combobox value={selected} onChange={setSelected} multiple>
      <Combobox.Input
        className="rounded-md px-4 py-2 text-sm border border-neutral-500"
        placeholder="Categoria"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Combobox.Options className="bg-white text-sm text-gray-600">
        {filter.map((item) => (
          <Combobox.Option key={item.id} value={item} as={Fragment}>
            {({ active }) => (
              <li
                className={clsx(
                  'py-2 px-3 cursor-pointer first-of-type:rounded-t-md last-of-type:rounded-b-md',
                  {
                    'bg-blue-500 text-white': active,
                  },
                )}
              >
                {item.name}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
      <div className="flex gap-1">
        {selected.map((item) => (
          <span
            key={item.id}
            className={`uppercase text-[8px] px-2 py-1 rounded-lg font-medium text-${item.color}-600 bg-${item.color}-50 hover:bg-${item.color}-100 cursor-pointer transition-colors`}
            onClick={() =>
              setSelected((state) =>
                state.filter((value) => value.id !== item.id),
              )
            }
          >
            {item.name}
          </span>
        ))}
      </div>
    </Combobox>
  )
}
