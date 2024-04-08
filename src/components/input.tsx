import { Spinner } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

export function Input({ isLoading = false, ...props }: InputProps) {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Buscar local"
        className="h-14 w-full rounded-lg bg-gray-600 px-5 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:outline-blue-light"
        {...props}
      />

      {isLoading && (
        <Spinner className="absolute right-4 h-8 w-8 animate-spin text-blue-light" />
      )}
    </div>
  )
}
