import { useParams } from 'react-router-dom'
import { useScripts } from '../../../hooks/useScripts'

import toast from 'react-hot-toast'
import clsx from 'clsx'

import {
  Clipboard,
  PencilSimpleLine,
  PencilSimpleSlash,
} from '@phosphor-icons/react'

import { useState } from 'react'

import TextareaAutosize from 'react-textarea-autosize'

export function Script() {
  const { scripts } = useScripts()
  const { id } = useParams()

  const script = scripts.find((script) => script.id === id)

  if (script) {
    const { title, categories, description } = script

    const descriptions = description.split('\n\n')

    return (
      <div className="flex flex-col gap-2">
        <h1 className="font-bold uppercase text-gray-700 text-2xl">{title}</h1>
        <div className="flex gap-2 text-xs lowercase">
          {categories.map(({ id, name }, index) => {
            if (categories.length === index + 1) {
              return <span key={id}>{name}</span>
            }

            return (
              <>
                <span key={id}>{name}</span>
                <span>•</span>
              </>
            )
          })}
        </div>
        <main className="flex flex-col gap-4 mt-4">
          {descriptions.map((description) => (
            <Description key={description} description={description} />
          ))}
        </main>
      </div>
    )
  }
}

interface DescriptionProps {
  description: string
}

function Description({ description }: DescriptionProps) {
  const [editable, setEditable] = useState(false)
  const [script, setScript] = useState(description)

  function copyToClipboard() {
    navigator.clipboard.writeText(script)
    toast.custom(
      (toast) => (
        <div
          className={clsx(
            'bg-white px-6 py-3 shadow-sm rounded-full text-gray-700 flex items-center gap-2 text-sm',
            {
              'animate-enter': toast.visible,
              'animate-leave': toast.visible,
            },
          )}
        >
          <Clipboard size={20} /> Script copiado!
        </div>
      ),
      {
        duration: 200,
      },
    )
  }

  function handleEditable() {
    setEditable(!editable)
  }

  return (
    <div className="group relative">
      <TextareaAutosize
        disabled={!editable}
        value={script}
        onChange={(e) => setScript(e.target.value)}
        className={clsx(
          'bg-white p-4 w-full ring-0 ring-offset-0 rounded-md text-sm whitespace-pre-line overflow-auto border border-neutral-400',
        )}
      ></TextareaAutosize>
      <div
        onClick={handleEditable}
        className="flex items-center justify-center cursor-pointer rounded-full text-gray-600 border-2 border-neutral-400 text-xs bg-white absolute p-1 -bottom-1 -right-2"
      >
        {editable ? <PencilSimpleSlash /> : <PencilSimpleLine />}
      </div>
      <div
        onClick={copyToClipboard}
        className="flex items-center justify-center cursor-pointer rounded-full text-gray-600 border-2 border-neutral-400 text-xs bg-white absolute p-1 -bottom-1 right-6"
      >
        <Clipboard />
      </div>
    </div>
  )
}
