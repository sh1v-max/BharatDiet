import { useId } from 'react'

export default function Input({
  label,
  hint,
  error,
  className = '',
  ...props
}) {
  const id = useId()
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`min-h-11 rounded-xl border bg-white px-4 py-2.5 text-ink placeholder:text-ink-faint focus:outline-2 focus:outline-offset-1 ${
          error
            ? 'border-gap-large focus:outline-gap-large'
            : 'border-line focus:outline-saffron-400'
        }`}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error ? (
        <p className="text-sm text-gap-large">{error}</p>
      ) : (
        hint && <p className="text-sm text-ink-faint">{hint}</p>
      )}
    </div>
  )
}
