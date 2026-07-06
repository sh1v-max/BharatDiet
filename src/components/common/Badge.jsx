const tones = {
  saffron: 'bg-saffron-100 text-saffron-800',
  leaf: 'bg-leaf-100 text-leaf-800',
  neutral: 'bg-line text-ink-soft',
  met: 'bg-leaf-100 text-gap-met',
  warn: 'bg-saffron-100 text-gap-small',
  alert: 'bg-[#f7e3dc] text-gap-large',
}

export default function Badge({ tone = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
