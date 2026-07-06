const variants = {
  primary:
    'bg-saffron-400 text-white hover:bg-saffron-500 active:bg-saffron-600',
  secondary:
    'border-2 border-saffron-400 text-saffron-600 hover:bg-saffron-50 active:bg-saffron-100',
  ghost: 'text-ink-soft hover:bg-saffron-50 hover:text-ink',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-500 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
