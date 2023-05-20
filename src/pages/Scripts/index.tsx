import { Fragment, useContext } from 'react'
import { SearchForm } from './components/SearchForm'
import { ScriptsContext } from '../../contexts/ScriptsContext'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

export function Scripts() {
  const { scripts } = useContext(ScriptsContext)
  const navigate = useNavigate()

  return (
    <Fragment>
      <SearchForm />
      <main className="flex flex-wrap gap-4 mt-8">
        {scripts.map(({ id, title, categories }) => (
          <div
            key={id}
            onClick={() => navigate(id)}
            className="bg-white h-24 w-[328px] border border-neutral-400 rounded-lg p-4 cursor-pointer
            hover:border-neutral-600 transition-colors flex flex-col justify-between"
          >
            <h1 className="font-medium text-gray-600 uppercase">{title}</h1>
            <div className="flex gap-1">
              {categories.map(({ id, name, color }) => (
                <span
                  key={id}
                  className={clsx(
                    `uppercase text-[8px] px-2 py-1 rounded-lg font-medium`,
                    {
                      'text-blue-600 bg-blue-50': color === 'blue',
                      'text-yellow-600 bg-yellow-50': color === 'yellow',
                      'text-green-600 bg-green-50': color === 'green',
                    },
                  )}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </main>
    </Fragment>
  )
}
