import { useId } from 'react'

export default function Select({
  label,
  options, // [{ value, label }]
  placeholder = 'Select…',
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
      <select
        id={id}
        className="min-h-11 cursor-pointer rounded-xl border border-line bg-white px-4 py-2.5 text-ink focus:outline-2 focus:outline-offset-1 focus:outline-saffron-400"
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
