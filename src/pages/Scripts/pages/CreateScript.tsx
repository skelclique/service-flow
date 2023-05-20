import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { ScriptsContext } from '../../../contexts/ScriptsContext'
import { Category, CategoryPicker } from '../../../components/CategoryPicker'

export function CreateScript() {
  const [categories, setCategories] = useState<Category[]>([])
  const { register, handleSubmit } = useForm()
  const { createScript } = useContext(ScriptsContext)
  const navigate = useNavigate()

  function handleCreateScriptSubmit(data: any) {
    if (categories[0]) {
      createScript({
        id: uuidv4(),
        ...data,
        categories,
      })

      navigate('/scripts')
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex justify-center flex-col">
          <h1 className="font-bold text-gray-600 text-lg">Novo Script</h1>
          <p className="text-sm">
            Crie scripts personalizados para otimizar seus atendimentos.
          </p>
        </div>
      </div>
      <main className="mt-8">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleCreateScriptSubmit)}
        >
          <input
            type="text"
            className="border border-neutral-500 rounded-md py-2 px-4 text-sm"
            placeholder="Titulo"
            required
            {...register('title')}
          />
          <textarea
            placeholder="Script"
            className="border border-neutral-500 rounded-md py-3 px-4 text-sm min-h-[8rem]"
            required
            {...register('description')}
          ></textarea>
          <CategoryPicker selected={categories} setSelected={setCategories} />
          <div className="flex gap-4">
            <NavLink
              to=".."
              className="flex items-center justify-center bg-white border border-neutral-500 flex-1 rounded-md text-gray-500 
              text-sm font-medium py-2 hover:bg-gray-50 transition-colors hover:border-neutral-600"
            >
              Cancelar
            </NavLink>
            <button
              type="submit"
              className="bg-blue-500 flex-1 rounded-md text-white text-sm font-medium py-2 hover:bg-blue-400 transition-colors"
            >
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
